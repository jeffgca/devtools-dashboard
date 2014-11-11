function formatDate(d) {
  return d.getDate() + '/' + (d.getMonth() + 1) + '/' + (d.getYear() + 1900);
}

function cap(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}

var tools = {
  'Toolbox':            'DEVTOOLS_TOOLBOX_OPENED_PER_USER_FLAG'
};

// function fetchChannels(versions, channel, finish) {
//   _.each(versions, function(version) {
//     // run fetchChannel, collect everything...
//     fetchChannel(version, channel, function (result) {
//       console.log("done", result);
//     })
//   });
// }

function fetchToolboxUsage(finish) {
  var start = 32, // the version we started to collect Beta data
      dd = new DevtoolsTelemetry(Telemetry);

  dd.init(function() {
    var end = _.last(dd.getVersionRange()); // get the latest nightly version
    var windows = generateBuildWindows(start, end);

    console.log(windows);

    // dd.getWeeklyToolUsage(windows, 'Toolbox', callback);

    var _version = _.last(windows).nightly;

    Telemetry.loadEvolutionOverTime(_version, tools.Toolbox, function(histogramEvolution) {
      var results = histogramEvolution.map((date, histogram) => {
        var _m = moment(date);
        var shortDate = _m.format('YYYY/MM/DD');
        var _count = 0;
        histogram.each((count, start, end, index) => {
          if (start === 1) {
            _count += count;
          }
        });
        return {date: date, count: _count};
      });

      finish(results);
    });
  });
}


// function fetchChannel(targetVersion, channel, finish) {
//   Telemetry.init(function() {
//     var devtoolsData = new DevtoolsTelemetry(Telemetry);
//     var totals = [];
//     var _i = 0, limit = (_.size(tools));
//     _.each(tools, function(tool, label) {
//       var _version = channel+'/'+targetVersion;
//       devtoolsData.getUsageGraph(_version, tool, function(err, result) {
//         _i++;
//         var _r = {
//           // tool: tool,
//           label: label,
//           yes: result.yes,
//           no: result.no,
//           total: result.total,
//           version: targetVersion
//         };
        
//         totals.push(_r);
//         // console.log(_i, limit);
//         if (_i === limit) {
//           // sum up totals for each channels / tool combination

//           finish(_.sortBy(totals, "yes").reverse());
//         }
//       });
//     });
//   });
// }

$(function() {

  $('#reload-btn').click(function() {
    fetch(render);
  });

  fetch(render);
});

function fetch(callback) {

  $('#about-toggle').click(function(e) {
    e.preventDefault();
    $('#about-container').toggle();
  });

  var chart_struct = {
    datasets: [],
    labels: []
  };

  var r = [], _i = 0;
  var chart_columns = [];

  // var functions = _.map(channels, function(versions, channel) {
  //   return function(callback) {
  //     fetchChannels(versions, channel, function(data) {
  //       callback(null, {versions: versions, channel: channel, data: data});
  //     });
  //   };
  // });

  fetchToolboxUsage((results) => { 
    // 
    console.log("in callback");
    console.table(results);
  });
}

function render(data) {

  console.log(data);
  return;
  // var categories = _.pluck(data[0].data, 'label');
  // console.log(categories);
  // var series = [];

  // _.each(data, function(channel) {
  //   _tool = {name: channel.channel};
  //   _tool.data = _.pluck(channel.data, 'yes');
  //   series.push(_tool);
  // });

  var graph = {
      chart: {
          type: 'column',
          height: 600,
      },
      title: {
          text: 'Tool usage'
      },
      xAxis: {
          categories: categories
      },
      yAxis: {
          title: {
              text: null
          },
          labels: {
              formatter: function(){
                  return (Math.abs(this.value) / 1000) + 'K';
              }
          },
          min: 0
      },
      plotOptions: {
          series: {
              stacking: 'normal'
          }
      },
      series: series
  };
  $('#graph-container').highcharts(graph);
}
