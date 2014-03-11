function isInRange(range, start, end) {
  if (start >= range.start && end <= range.end) {
      return true;
  }
  return false;
}

function generateBuildWindows(startNightly, endNightly) {
  var diff = (endNightly - startNightly)+1;
  var versions =  _.map(_.range(diff), function(i) {
    var n = startNightly+i, a = n-1, b = n-2, r = n-3;
    var out = {nightly: 'nightly/'+n};
    // if (b >= startNightly) {
    //   out['beta'] = 'beta/'+b
    // }
    if (a >= startNightly) {
      out['aurora'] = 'aurora/'+a
    }
    // if (r >= startNightly) {
    //   out['release'] = 'release/'+r
    // }
    return out;
  });
  return versions;
}

var start = 24, end = 30;


var ranges = [{
    start: 60,
    end: Infinity,
    desc: "More than 60 seconds"
  },
  {
    start:1200,
    end:Infinity,
    desc: "More than 20 minutes"
  }
];

var pp = function(o) { return JSON.stringify(o)};

/*
  Notes:
  * telemetry landed for devtools in nightly/24
  * first numbers are from 2013/05/14
*/

var createWeeklyMap = function(results, callback) {
  // console.log(pp(results)); need to do this with less data
  // debugger;
  console.log("in final");
  console.log(results);

  // $('#output').html(pp(results));

  var map = {};
  var map2 = _.object(_.pluck(ranges, 'desc'), [{}, {}]);

  // divide results into weeks
  _.each(results, function(measure) {
    // console.log(measure);
    _.each(measure, function(counts, date) {
      var _m = moment(date);
      var _year = _m.year();
      var _weeks = _m.weeks();

      var strDate = _m.clone().startOf('week').format('MM/DD/YYYY');
      // console.log(date, _year, _weeks);

/* 


want this data structure instead:

{
  'more than a minute': [
    {
      week: "mm/dd/YYY (date of week start)",
      count: %i,
      _intWeek: %d (number of weeks into the year)
    },
    ..
  ],
  'more than an hour': [
    {
      week: "mm/dd/YYY (date of week start)",
      count: %i,
      _intWeek: %d (number of weeks into the year)
    },
    ....
  ]
}

 */      

      _.each(ranges, function(r) {
        _.each(counts, function(count) {
          if (isInRange(r, count.start, count.end)) {
            if (!map2[r.desc]) {
              map2[r.desc] = {};
            }

            if (!map2[r.desc][strDate]) {
              map2[r.desc][strDate] = {
                count: count.count,
                week: strDate,
                _intWeek: _weeks
              };         
            } 
            else {
              map2[r.desc][strDate].count += count.count;
            }
          }  
        });
      });
    });
  });

  callback('Something', 'Else', map2);
};

var render = function(xTitle, yTitle, data) {

  // debugger;
  console.log(data);

  var series = [];

  var columns = _.keys(_.values(data)[0]);

  _.each(data, function(weeks, label) {
    var _data = _.map(weeks, function(week, i) {
      return week.count;
    });
    series.push({
      name: label,
      data: _data
    })
  });

  $('#container').highcharts({
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

}

var OFFLINE = false;
// var OFFLINE = true;// load from local json

function handleSelect(ev) {
  ev.preventDefault();
  currentTool = $('#measure-select').val();
  // console.log($('#measure-select').val());
  fetcher(currentTool);
}

var toolsPaths = {
  "Inspector": 'inspector.json',
  "Web Console": 'webconsole-1.json',
  "Toolbox": 'toolbox.json',
}

var currentTool;

var fetcher = function(tool) {

  $('#measure').html('Selected: '+tool);

  if (OFFLINE) {

    var path;
    if (toolsPaths[tool]) {
      var url ='http://localhost:8080/mock/'+toolsPaths[tool];  
    }
    else {
      throw "Invalid tool: "+tool+", should be one of "+_.values(toolsPaths).join(', ');
    }

    $.getJSON(url, function(json) {
      createWeeklyMap(json, render);
    }); 
  }
  else {
    var dd = new DevtoolsTelemetry(Telemetry);
    // get a list of ranges for weekly buckets
    var weeks_end = moment(), weeks_start = moment('2013-05-14'), full_range = moment().range(start, end);
    var currentWeek = weeks_end.weeks();
    var currentYear = weeks_end.year();
    var windows = generateBuildWindows(start, end);

    debugger;

    dd.init().done(function() {
      // dd.getWeeklyToolUsage(windows, 'Web Console', createWeeklyMap);
      dd.getWeeklyToolUsage(windows, tool).done(function(results) {
        debugger;
        createWeeklyMap(results, render);
      });
    });
  }
}

$(function() {

  // bindings 
  $('#tool-selector').submit(handleSelect);
  var dropList = $('#measure-select');
  dropList.change(handleSelect);

  // fetch based on the current  value
  fetcher(dropList.val());
});