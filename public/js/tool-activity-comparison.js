function formatDate(d) {
  return d.getDate() + '/' + (d.getMonth() + 1) + '/' + (d.getYear() + 1900);
}

function cap(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}

function renderDropDown(id, items, callback) {
  var container = $('#'+id);
  var list = _.map(items, function(item, label) {
    return '<li><a href="#" id="'+ label +'">' + label + '</li>';
  }).join("\n");

  container.html(list).click(function(ev) {
    console.log("ev", ev.target.id);
    $('#selected-Tool').html(ev.target.id);
    // CURRENT_TOOL = ev.target.id;
    fetch(ev.target.id, render);
  });
}

var DROPDOWN_RENDERED, 
  DEFAULT_TOOL = 'Toolbox',
  CURRENT_TOOL;

getCurrentVersions(function(err, result) {
  if (err) throw err;
  console.log("versions", result);
});

var dd;

function fetchForTool(tool, callback) {
  Telemetry.loadEvolutionOverTime('aurora/39', dd.Toolmap[tool].bool, function(histogramEvolution) {
    var results = histogramEvolution.map(function (date, histogram) {
      var _count = 0;
      histogram.each(function (count, start, end, index) {
        if (start === 1) {
          _count += count;
        }
      });
      return {channel: channel.name, date: date, count: _count, version: version};
    });
    callback(null, results);
  });
}


function fetchChannelActivity(tool, finish) {
  var start = 38;
  dd = new DevtoolsTelemetry(Telemetry);

  dd.init(function() {
    if (!DROPDOWN_RENDERED) {
      renderDropDown('tool-dropdown', dd.Toolmap, function(err) {
        if (err) throw err;
        DROPDOWN_RENDERED=true;
        console.log("rendered dropdown");
      });
    }

    // $('')

    dd.getVersionRange(function(err, nightlyVersions) {
      console.log(nightlyVersions);
      if (err) throw err;
      var windows = generateBuildWindows(start, _.last(nightlyVersions));
      var _channelNames = _.keys(_.last((windows)));
      _channelNames = [ "aurora" ];
      var channels  = _.map(_channelNames, function(name) {
        return {name: name, versions: _.compact(_.pluck(windows, name))};
      });

      var outer = _.map(channels, function(channel) {
        console.log("versions", channel.versions);
        var functions = _.map(channel.versions, function(version) {
          return function(callback) {
            Telemetry.loadEvolutionOverTime(version, dd.Toolmap[tool].bool, function(histogramEvolution) {
              var results = histogramEvolution.map(function (date, histogram) {
                var _count = 0;
                histogram.each(function (count, start, end, index) {
                  if (start === 1) {
                    _count += count;
                  }
                });
                return {channel: channel.name, date: date, count: _count, version: version};
              });
              callback(null, results);
            });
          }
        });

        return {name: channel.name, functions: functions};
      });

      var functions = _.flatten(_.map(outer, function(_item) {
        return _item.functions;
      }));

      async.parallel(functions, function(err, results) {
        results = _.map(results, function(result) {
          return _.filter(result, function(count) {
            if (count.count > 10) {
              return true;
            }
          });
        });
        finish(results);
      });
    }); // get the latest nightly version
  });
}

$(function() {

  // $('#reload-btn').click(function() {
  //   fetch(CURRENT_TOOL, render);
  // });

  fetch(DEFAULT_TOOL, render);
});

function fetch(id, callback) {
  $('#about-toggle').click(function(e) {
    e.preventDefault();
    $('#about-container').toggle();
  });

  $('#graph-container').html("Loading...");

  var chart_struct = {
    datasets: [],
    labels: []
  };

  var r = [], _i = 0;
  var chart_columns = [];

  fetchChannelActivity(id, function (results) {
    // console.table(results);
    callback(results);
  });
}

function render(data) {
  var categories = [];
  var series = _.map(data, function(version) {
    var pair = _.pairs(_.groupBy(version, 'version')).pop();
    var _data =_.map(pair[1], function(row) {
      function getDate(d) {
        return Date.UTC( (d.getYear()+1900), d.getMonth(), d.getDate() );
      }
      return [getDate(row.date), row.count];
    });

    pair[1] = _data;
    var grouped =  _.object(['name', 'data'], pair);
    return grouped;
  });

  var graph = {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Toolbox raw activity'
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
            },
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            title: {
                text: 'Total unique installs'
            },
            min: 0
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x:%b %e}: {point.y:.2f}'
        },
        series: series,
        plotOptions: {
          series: {
            marker: {
              enabled: false
            }
          }
        }
    };

  $('#graph-container').highcharts(graph);
}
