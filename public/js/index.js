var start = 24, end;

var render = function(xTitle, yTitle, data) {
  var columns = _.map(data[_.first(_.keys(data))], function(item) {
    return item.week;
  });
  var series = [];
  _.each(data, function(weeks, label) {
    var _data = _.map(weeks, function(week, i) {
      return week.count;
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
        }
      },
      xAxis: {
        // categories: ["More than 1 Minute", "More than 60 minutes"]
        categories: columns
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
// var OFFLINE = true;// load from local json

var fetcher = function(tool) {
  $('#graph-container').html("");
  $('#loader').show();

  $.getJSON('data/toolbox-weekly.json', function(json) {
    render('Weeks', 'Sessions', json);
  });
};

$(function() {

  $('#about-toggle').click(function(e) {
    e.preventDefault();
    $('#about-container').toggle();
  });

  $('#reload-btn').click(function(ev) {
    ev.preventDefault();
    $('#loader').show();
    $('#graph-container').html("");
    fetcher('Toolbox');
  });

  fetcher('Toolbox');
});