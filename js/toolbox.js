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
var versions = [27,28,29,30];

var gResults;

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


function renderHighChartBars(results) {

  results = _.sortBy(results, 'version');

  var series = [],
      categories = [],
      channels = [];

  // categories = _.uniq(_.pluck(results, 'version'));

  categories = _.map(results, function(r) {
    return r.channel+' '+r.version;
  });
  var channels = _.uniq(_.pluck(results, 'channel'));
  var datasets = [[], []];

  _.each(results, function(item) {
    datasets[0].push(item.results[0]);
    datasets[1].push(item.results[1]);
  });

  // channels = _.map(series, function(s) { return s.name; });

  _.each(_.range(2), function(i) {
    series.push({
      name: (i === 0) ? "More than 1 Minute" : "More than 1 hour",
      data: datasets[i]
    });
  });

  $('#container').highcharts({
      chart: {
          type: 'column'
      },
      title: {
          text: 'DEVTOOLS_TOOLBOX_TIME_ACTIVE_SECONDS'
      },
      yAxis: {
        'title': {
          'text': 'Users per Build'
        }
      },
      xAxis: {
        // categories: ["More than 1 Minute", "More than 60 minutes"]
        categories: categories
      },
      labels: {
        rotation: -45,
        align: 'right',
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif'
        }
      },
      series: series
  });
}

var pp = function(o) { return JSON.stringify(o,null,'  ')};

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
    // debugger;

    async.parallel({
      'aurora': function(cb) {
        var channel = 'aurora';
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

      results = _.flatten(_.values(results));

      // sum things up in sequences
      // _.each(results, function(r) {

      // });

      // highcharts implementation
      renderHighChartBars(results);

    });
  });
});
