function formatDate(d) {
  return d.getDate() + '/' + (d.getMonth() + 1) + '/' + (d.getYear() + 1900);
}

function cap(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}

// XXX switch to DevtoolsTelemetry.ToolMap
var tools = {
  'Toolbox':            'DEVTOOLS_TOOLBOX_OPENED_PER_USER_FLAG',
  'Inspector':          'DEVTOOLS_INSPECTOR_OPENED_PER_USER_FLAG',
  'Options':            'DEVTOOLS_OPTIONS_OPENED_PER_USER_FLAG',
  'Web Console':        'DEVTOOLS_WEBCONSOLE_OPENED_PER_USER_FLAG',
  'Net Monitor':        'DEVTOOLS_NETMONITOR_OPENED_PER_USER_FLAG',
  'Web Audio':          'DEVTOOLS_WEBAUDIOEDITOR_OPENED_PER_USER_FLAG',
  'WebIDE':             'DEVTOOLS_WEBIDE_OPENED_PER_USER_FLAG',
  'Responsive Design':  'DEVTOOLS_RESPONSIVE_OPENED_PER_USER_FLAG',
  'Style Editor':       'DEVTOOLS_STYLEEDITOR_OPENED_PER_USER_FLAG',
  'Canvas':             'DEVTOOLS_CANVASDEBUGGER_OPENED_PER_USER_FLAG',
  'Shader':             'DEVTOOLS_SHADEREDITOR_OPENED_PER_USER_FLAG',
  'Debugger':           'DEVTOOLS_JSDEBUGGER_OPENED_PER_USER_FLAG',
  'Tilt':               'DEVTOOLS_TILT_OPENED_PER_USER_FLAG',
  'Profiler':           'DEVTOOLS_JSPROFILER_OPENED_PER_USER_FLAG',
  'Paint Flashing':     'DEVTOOLS_PAINTFLASHING_OPENED_PER_USER_FLAG',
  'Developer Toolbar':  'DEVTOOLS_DEVELOPERTOOLBAR_OPENED_PER_USER_FLAG',
  'Scratchpad':         'DEVTOOLS_SCRATCHPAD_OPENED_PER_USER_FLAG',
  'Storage Inspector':  'DEVTOOLS_STORAGE_OPENED_PER_USER_FLAG'
};

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

  // XXX switch to getCurrentVersions()
  // var channels = {
  //   'beta'    : 38,
  //   'aurora'  : 39,
  //   'nightly' : 40
  // };

  var channels = {
    'beta'    : 41,
    'aurora'  : 42,
    'nightly' : 43
  };

  // var pair_channels = _.pairs(channels);

  var chart_struct = {
    datasets: [],
    labels: []
  };

  var r = [], _i = 0;
  var chart_columns = [];

  var dd = new DevtoolsTelemetry(Telemetry);

  dd.init(function() {
    console.log(channels);
    var functions = _.map(channels, function(version, channel) {
      return function(callback) {
        dd.fetchChannel(version, channel, function(data) {
          console.table(data);
          callback(null, {channel: channel + ' '+version, data: data});
        });
      };
    });

    async.parallel(functions, function(err, results) {
      if (err) throw err;
      // console.table(results[1].data);

      // sort-o-rama
      var tools = _.pluck(results[0].data, 'label');

      // console.table(tools);

      var _sorted = {};

      _.each(results, function(result) {
        _.each(result.data, function(row) {
          if (!_sorted[row.label]) {
            var tool = {};
            tool[result.channel] = row.yes;
            _sorted[row.label] = tool;
          }
          else {
            _sorted[row.label][result.channel] = row.yes
          }
        });
      });

      callback(_sorted);
    });
  });
}

function render(data) {
  // console.table(data); // keeping this because it's kinda useful
  var tools = _.keys(data);
  var values = _.values(data);
  var versions = _.keys(values[0]);


  var out = {};

  _.each(versions, (version) => {
    if (!out[version]) {
      out[version] = {name: version, data: []};
    }
  });

  _.each(values, (val) => {
    _.each(val, function(v, k) {
      out[k].data.push(v);
    });
  });

  var series = _.values(out);

  var graph = {
      chart: {
          type: 'column',
          height: 600,
      },
      title: {
          text: 'Tool usage'
      },
      xAxis: {
          categories: tools
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

function renderTable(data, id) {
  var tbl = _.map(data, function(row) {
    return `    <li>${row.label} - ${row.yes}</li>`;
  }).join("\n");

  $('#'+id).html(`<ul>${tbl}</ul>`);
}
