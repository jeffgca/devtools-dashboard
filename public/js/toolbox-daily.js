var start = 24, end;

var render = function(xTitle, yTitle, data) {
  // console.log(data);
  var columns = _.keys(_.first(data)).slice(0, 2);

  console.log(columns);

  // var series = _.
  var series = [];
  _.each(data, function(d) {
    
    

    series.push({
      // name: label,
      name: "Hello",
      data: d
    });
  });

  console.log(series);

  // $('#graph-container').highcharts({
  //     chart: {
  //         type: 'line'
  //     },
  //     title: {
  //         text: xTitle
  //     },
  //     yAxis: {
  //       'title': {
  //         'text': yTitle
  //       }
  //     },
  //     xAxis: {
  //       // categories: ["More than 1 Minute", "More than 60 minutes"]
  //       categories: columns
  //     },
  //     labels: {
  //       rotation: -45,
  //       align: 'right',
  //       style: {
  //         fontSize: '13px',
  //         fontFamily: 'Verdana, sans-serif'
  //       }
  //     },
  //     series: series
  // });
  $('#loader').hide();
  $('#graph-container').show();
};

var fetcher = function(tool) {
  $('#graph-container').html("");
  $('#loader').show();

  $.getJSON('data/toolbox-daily.json', function(json) {
    console.log(json);
    render('Days', 'Sessions', json.results);
    $('#date-collected > span').html(Date(json.timestamp));
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