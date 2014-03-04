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
var ctx = $("#time-chart").get(0).getContext("2d");

function getToolboxUsageForChannel(devtools, channel, versions, color, callback) {
  var _i = 0;
  var full_results = [];

  _.each(versions, function(_v, i) { // this isn't version data, it's time data

    var version = channel+'/'+_v;
    // embedding the ranges definition here.
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

    devtools.getBucketsForTool('DEVTOOLS_TOOLBOX_TIME_ACTIVE_SECONDS', version, ranges)
      .then(function(buckets) {
        _i++;
        if (buckets.results !== void 0) {
          full_results.push({
            channel: channel,
            version: version,
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
    async.parallel([
      function(cb) {
        var channel = 'aurora';
        getToolboxUsageForChannel(dd, channel, versions, 'red', function(err, result) {
          if (err) throw err;
          cb(null, result);
        });
      },
      function(cb) {
        var channel = 'beta';
        getToolboxUsageForChannel(dd, channel, versions, 'yellow', function(err, result) {
          if (err) throw err;
          cb(null, result);
        });
      },
      function(cb) {
        var channel = 'nightly';
        getToolboxUsageForChannel(dd, channel, versions, 'green', function(err, result) {
          if (err) throw err;
          cb(null, result);
        });
      }
    ], function(err, results) {

      if (err) throw err;
      // console.log("got here!!!");
      console.log(results);

      // results[0] is the first in the range, results[1] is the second


      _.each(results, function(channel) {
        _.each(channel, function(version) {
          
        });
      });      

      // var datasaet = {
      //   fillColor : 'rgba(0, 0, 0, 0)',
      //   strokeColor : color,
      //   pointColor : color,
      //   pointStrokeColor : color,
      //   data : []
      // };


    });
  });
});