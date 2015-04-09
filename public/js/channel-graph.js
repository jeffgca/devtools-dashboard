var start = 24, end;

var render = function(xTitle, yTitle, data) {

  var series = [];

  _.each(data, function(weeks, label) {
    var _data = _.map(weeks, function(week, i) {
      var _ts = Date.parse(week.week);
      return [_ts, week.count];
    });
    series.push({
      name: label,
      data: _data
    });
  });

  $('#graph-container').highcharts({
      chart: {
          type: 'line'
      },
      title: {
          text: xTitle
      },
      yAxis: {
        'title': {
          'text': yTitle
        },
        'min': 0
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
          month: '%b %Y',
        },
        title: {
          text: 'Date'
        }
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
  $('#loader').hide();
  $('#graph-container').show();
};

var fetcher = function(tool) {
  $('#graph-container').html("");
  $('#loader').show();

  $.getJSON('data/toolbox-channels.json', function(json) {
    render('Weeks', 'Sessions', json.results);
    var date = new Date(json.timestamp);
    $('#date-collected > span').html(date);
  });
};

$(function() {

  // $('#about-toggle').click(function(e) {
  //   e.preventDefault();
  //   $('#about-container').toggle();
  // });

  $('#reload-btn').click(function(ev) {
    ev.preventDefault();
    $('#loader').show();
    $('#graph-container').html("");
    fetcher('Toolbox');
  });

  fetcher('Toolbox');
});
