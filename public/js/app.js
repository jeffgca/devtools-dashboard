
function formatDate(d) {
  return d.getDate() + '/' + (d.getMonth() + 1) + '/' + (d.getYear() + 1900);
}

function cap(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}

var tools = {
  'Toolbox':            'DEVTOOLS_TOOLBOX_OPENED_PER_USER_FLAG',
  'Inspector':          'DEVTOOLS_INSPECTOR_OPENED_PER_USER_FLAG',
  'Web Console':        'DEVTOOLS_WEBCONSOLE_OPENED_PER_USER_FLAG',
  'Net Monitor':        'DEVTOOLS_NETMONITOR_OPENED_PER_USER_FLAG',
  'Responsive Design':  'DEVTOOLS_RESPONSIVE_OPENED_PER_USER_FLAG',
  'Style Editor':       'DEVTOOLS_STYLEEDITOR_OPENED_PER_USER_FLAG',
  'Debugger':           'DEVTOOLS_JSDEBUGGER_OPENED_PER_USER_FLAG',
  'Tilt':               'DEVTOOLS_TILT_OPENED_PER_USER_FLAG',
  'Profiler':           'DEVTOOLS_JSPROFILER_OPENED_PER_USER_FLAG',
  'Paint Flashing':     'DEVTOOLS_PAINTFLASHING_OPENED_PER_USER_FLAG',
  'Developer Toolbar':  'DEVTOOLS_DEVELOPERTOOLBAR_OPENED_PER_USER_FLAG',
  'Scratchpad':         'DEVTOOLS_SCRATCHPAD_OPENED_PER_USER_FLAG'
};

function fetchChannel(targetVersions, channel, finish) {
  Telemetry.init(function() {
    var devtoolsData = new DevtoolsTelemetry(Telemetry);
    var totals = [];
    var _i = 0, limit = (_.size(tools) * _.size(targetVersions));
    _.each(tools, function(tool, label) {
      _.each(targetVersions, function(i) {
        var version = channel+'/'+i;
        devtoolsData.getUsageGraph(version, tool, function(err, result) {
          _i++;
          var _r = {
            // tool: tool,
            label: label,
            yes: result.yes,
            no: result.no,
            total: result.total,
            version: i
          };
          
          totals.push(_r);
          // console.log(_i, limit);
          if (_i === limit) {
            // sum up totals for each channels / tool combination

            finish(_.sortBy(totals, "yes").reverse());
          }
        });
      });
    });
  });
}

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

  var channels = {
    'aurora'  : [32],
    'nightly'  : [33],
  };

  var pair_channels = _.pairs(channels);

  var chart_struct = {
    datasets: [],
    labels: []
  };

  var r = [], _i = 0;
  var chart_columns = [];


  var functions = _.map(channels, function(versions, channel) {
    return function(callback) {
      fetchChannel(versions, channel, function(data) {
        callback(null, {channel: channel, data: data});
      });
    };
  });

  async.parallel(functions, function(err, results) {
    if (err) throw err;
    callback(results);
  });

  // _.each(channels, function(versions, channel) {
  //   fetchChannel(versions, channel, function(data) {

  //     console.log(data);

  //     callback(data);

  //     // if (chart_columns.length === 0) {
  //     //   chart_columns = _.map(data, function(item) {
  //     //     return item.label;
  //     //   });
  //     //   chart_struct.labels = chart_columns;
  //     // }

  //     // var _str_columns = _.keys(data[0]).join(',')+"\n";

  //     // // var _str_data = _.map(data, function(row) {
  //     // //   return _.values(row).join(',');
  //     // // }).join("\n");

  //     // // $('pre#output').append(_str_columns+_str_data+"\n");

  //     // chart_data = _.map(data, function(row) {
  //     //   return row.yes;
  //     // });

  //     // var color = $('.'+channel).css('background-color');

  //     // chart_struct.datasets.push({
  //     //   fillColor: color,
  //     //   strokeColor: color,
  //     //   data: chart_data
  //     // });

  //     // if (chart_struct.datasets.length === _.size(channels)) {

  //     //   var ctx = $("#data-chart").get(0).getContext("2d");
  //     //   var _chart = new Chart(ctx).Bar(chart_struct);
  //     // }
  //   });
  // });
};

function render(data) {
  var categories = _.pluck(data[0].data, 'label');
  var series = [];

  var totals = {};


  _.each(data, function(channel) {
    _tool = {name: channel.channel};
    _tool.data = _.pluck(channel.data, 'yes');
    _.each(channel.data, function(d) {
      if (!totals[d.label]) {
        totals[d.label] = {count: d.yes, name: d.label};  
      }
      else {
        totals[d.label].count += d.yes;
      }
    })
    series.push(_tool);
  });

  // console.log(_.sortBy(totals, 'count'));

  var graph = {
      chart: {
          type: 'column',
          height: 600,
      },
      title: {
          text: 'Tool usage'
      },
      xAxis: {
          // categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
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
          min: 0,
          max: 30000
      },
      plotOptions: {
          series: {
              stacking: 'normal'
          }
      },
      series: series
  };

  console.log(graph);

  $('#graph-container').highcharts(graph);

}
