// function isInRange(range, start, end) {
//   if (start >= range.start && end <= range.end) {
//       return true;
//   }
//   return false;
// }

function generateBuildWindows(startNightly, endNightly) {
  var diff = (endNightly - startNightly)+1;
  var versions =  _.map(_.range(diff), function(i) {
    var n = startNightly+i, a = n-1, b = n-2, r = n-3;
    var out = {nightly: 'nightly/'+n};
    // if (b >= startNightly) {
    //   out['beta'] = 'beta/'+b
    // }
    if (a >= startNightly) {
      out.aurora = 'aurora/'+a;
    }
    // if (r >= startNightly) {
    //   out['release'] = 'release/'+r
    // }
    return out;
  });
  return versions;
}

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

  var dd = new DevtoolsTelemetry(Telemetry);
  // get a list of ranges for weekly buckets
  var weeks_end = moment(), weeks_start = moment('2013-05-14'), full_range = moment().range(start, end);
  var currentWeek = weeks_end.weeks();
  var currentYear = weeks_end.year();
  

  dd.init(function() {
    end = _.last(dd.getVersionRange()); // get the latest nightly version
    // console.log("end");console.log(end);
    var aurora = (end - 1);
    var compiled = _.template("<span><label>Aurora:</label> <%= v.aurora %><label>Nightly:</label> <%= v.nightly %></span>");

    $('.reload-status').append(compiled({v: {aurora: aurora, nightly: end}}));

    var windows = generateBuildWindows(start, end);

    dd.getWeeklyToolUsage(windows, tool, function(results) {
      var sorted = {};
      _.each(results, function(weeks, key) {
        var _sorted = _.sortBy(weeks, function(week, strDate) {
          return moment(strDate, 'MM/DD/YYYY').unix();
        });
        sorted[key] = _sorted;
      });
      // console.log(sorted);
      render('Weeks', 'Sesssions', sorted)
    });
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