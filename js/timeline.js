var ctx = $("#time-chart").get(0).getContext("2d");
var versions = [26,27,28,29];
var key_tpl = '<% _.each(versions, function(i) { %> <span class="color-key aurora-<%= i %>">aurora/<%= i %></span> <% }) %>';

var keys = '';

var row_tpl = "<% _.each(buckets, function(i) { %> <td><%= i %></td> <% }) %>";

var colors = {
  // 'aurora/25': 'red',
  'aurora/26': 'green',
  'aurora/27': 'red',
  'aurora/28': 'orange',
  'aurora/29': 'pink'
}

var keys = _.template(key_tpl, {versions: versions})+'</tr>';
$('#keys').html(keys);

var ranges = [
  {
    start:60,
    end:Infinity,
    desc: "More than 1 minute"
  },
  {
    start:3600,
    end:Infinity,
    desc: "More than 60 minutes"
  }
];

$(function() {
  var dd = new DevtoolsTelemetry(Telemetry);

  var chart_data = {
    labels : _.pluck(ranges, 'desc'),
    datasets : []
  };

  dd.init().then(function() {
    var _i = 0;
    _.each(versions, function(_v, i) { // this isn't version data, it's time data
      var version = 'aurora/'+_v;
      
      dd.getBucketsForTool('DEVTOOLS_WEBCONSOLE_TIME_ACTIVE_SECONDS', version, ranges)
        .then(function(buckets) {
          console.log(_i, versions.length);
          console.log(buckets.results);
          // var s = '<tr><td>'+version+'</td>';
          // s += _.template(row_tpl, {buckets: buckets.results})+'</tr>';
          // $('table#timing-output tbody').append(s);
          // var _t = 
          chart_data.datasets.push({
            // fillColor : 'rgba(0, 0, 0, 0)',
            fillColor : colors[version],
            strokeColor : colors[version],
            pointColor : colors[version],
            pointStrokeColor : colors[version],
            data : buckets.results
          });

          _i++;
          if (_i === versions.length) {
            var bars = new Chart(ctx).Bar(chart_data);
          }
        });
    });
  });
});