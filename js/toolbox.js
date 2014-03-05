// var versions = [25,26,27,28];
// var key_tpl = '<% _.each(versions, function(i) { %> <span class="color-key aurora-<%= i %>">aurora/<%= i %></span> <% }) %>';

// var keys = '';

// var row_tpl = "<% _.each(buckets, function(i) { %> <td><%= i %></td> <% }) %>";

// var colors = {
//   'aurora/26': 'green',
//   'aurora/27': 'red',
//   'aurora/28': 'orange',
//   'aurora/29': 'pink'
// }

// var keys = _.template(key_tpl, {versions: versions})+'</tr>';

// $('#keys').html(keys);
var versions = [26,27,28,29];

var ranges = [{
  start: 60,
  end: Infinity,
  desc: "More than 60 seconds"
},
{
  start:1200,
  end:Infinity,
  desc: "More than 20 minutes"
}];

function getToolboxUsageForChannel(devtools, channel, versions, ranges, callback) {
  var _i = 0;
  var full_results = [];

  _.each(versions, function(_v, i) { // this isn't version data, it's time data

    var version = channel+'/'+_v;
    // embedding the ranges definition here

    devtools.getBucketsForTool('DEVTOOLS_TOOLBOX_TIME_ACTIVE_SECONDS', version, ranges)
      .then(function(buckets) {
        _i++;
        if (buckets.results !== void 0) {
          full_results.push({
            channel: channel,
            version: _v,
            results: buckets.results
          });
        }

        if (_i === versions.length) {
          // var bars = new Chart(ctx).Line(chart_data);
          // do something with the data
            callback(null, full_results);
        }
        else {
          callback(["no results in the buckets???", buckets]);
        }
      });
  });
}



$(function() {
  $('#throbber').show();
  var dd = new DevtoolsTelemetry(Telemetry);

  var labels = _.map(versions, function(i) { return 'aurora/'+i; })

  // console.log(labels);

  var chart_data = {
    labels : labels,
    datasets : []
  };

  var args = function() {
    var _a = [].slice.call(arguments)
    return new Promise(function(resolve, reject) {
      console.log("");
      resolve(_a);
    })
  };

  var measure = 'DEVTOOLS_TOOLBOX_TIME_ACTIVE_SECONDS';

  dd.init().done(function() {
    async.parallel({
      'aurora': function(cb) {
        var channel = 'aurora';
        getToolboxUsageForChannel(dd, channel, versions, ranges, function(err, result) {
          if (err) throw err;
          cb(null, result);
        });
      },
      'beta': function(cb) {
        var channel = 'beta';
        getToolboxUsageForChannel(dd, channel, versions, ranges, function(err, result) {
          if (err) throw err;
          cb(null, result);
        });
      },
      'nightly': function(cb) {
        var channel = 'nightly';
        getToolboxUsageForChannel(dd, channel, versions, ranges, function(err, result) {
          if (err) throw err;
          cb(null, result);
        });
      }
    }, function(err, results) {
      if (err) throw err;
      console.log("got here!!!");
      $('#throbber').hide();

      /* so, 

        For stacked bar chart ( http://code.shutterstock.com/rickshaw/guide/bar-2.html )
        each 3 channels has 2 numbers and 4 versions, so six lines each with 4 points

        x axis is number of hits, y axis is version number

      */

      // step 1, create the series

      // var map = _.map(results, function(channel, name) {


      //   return name;
      // });
      var keys = _.keys(results);
      // initialize lines
      // var heavy_lines = _.object(keys, _.map(_.range(keys.length), function() { return []; }))
      // var light_lines = _.object(keys, _.map(_.range(keys.length), function() { return []; }))
      // debugger;
      
      var palette = new Rickshaw.Color.Palette();

      var light_lines = {}, heavy_lines = {};

      _.each(_.flatten(_.values(results)), function(v) {
        if (!light_lines[v.channel]) {
          light_lines[v.channel] = {
            name: v.channel, 
            color: palette.color(),
            data: [{y: v.results[0], x: v.version}]
          };  
        }
        else {
          light_lines[v.channel].data.push({y: v.results[0], x: v.version})
        }

        if (!heavy_lines[v.channel]) {
          heavy_lines[v.channel] = {
            name: v.channel, 
            color: palette.color(),
            data: [{y: v.results[1], x: v.version}]
          };          
        }
        else {
          heavy_lines[v.channel].data.push({y: v.results[1], x: v.version});
        }

      });

      var sorted = _.sortBy(_.values(light_lines), 'x');

      // console.log(sorted);

      // console.log(
      //   JSON.stringify(sorted, null, '  ')
      // );


      // series data needs to be sorted on x values for series name: aurora
      // console.log(heavy_lines);
      // rickshaw code
      // series data needs to be sorted on x values for series name: aurora
      // series data needs to be sorted on x values for series name: aurora
      // debugger;

      var graph_light = new Rickshaw.Graph({
        element: document.querySelector("#chart"),
        width: 800,
        height: 250,
        renderer: 'line',
        series: sorted
      });

      var y_ticks = new Rickshaw.Graph.Axis.Y( {
        graph: graph_light,
        orientation: 'left',
        // tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
        element: document.getElementById('y_axis'),
      });

      var x_ticks = new Rickshaw.Graph.Axis.X( {
        graph: graph_light,
        orientation: 'bottom',
        // tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
        tickFormat: function(y) { 
          if (Math.round(y) === y) {
            return y;
          }
          return '';
        },
        tickSize: '10',
        element: document.getElementById('x_axis'),
      });

      graph_light.render();
    });
  });
});
