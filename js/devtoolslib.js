// utilities
function formatDate(d) {
  return (d.getMonth() + 1) + '/' + d.getDate() + '/' + (d.getYear() + 1900);
}

/*
* Questions I would want to ask of telemetry:
*   opening of the toolbox over time in a given channel, eg join channels in a series
*   compare data from beta vs release vs aurora vs nightly for a specific measure
*/

var DevtoolsTelemetry = function(telemetryInstance) {
  var self = this;
  self.telemetryInstance = telemetryInstance;
  self.DevtoolsMeasures = {};
  self.DevtoolsModel = {};
  self.versions = false;

  self.init = function(callback) {
    self.telemetryInstance.init(function() {
      self.versions = self.telemetryInstance.versions();
      callback(true);
    });
  };

  self.getProbes = function(version, callback) {
    var devtools_measures = [];
    self.telemetryInstance.measures(version, function(measures) {
      var probe_names = Object.keys(measures);
      var devtools_keys = probe_names.filter(function(name) {
        return (name.indexOf('DEVTOOLS_') !== -1);
      });
      var out = {};
      devtools_keys.forEach(function(key) {
        out[key] = measures[key];
      });
      self.DevtoolsMeasures = out;
      callback(out);
    });
  };


  // a map of all the measures, by tool
  self.map = { devtools: {} };

  // generate a model of the tools measures
  self.generateModel = function(version, callback) {
    self.telemetryInstance.measures(version, function(measures) {
      var probe_names = Object.keys(measures);

      var devtools_keys = probe_names.filter(function(name) {
        return (name.indexOf('DEVTOOLS_') !== -1);
      });

      var _measures = {};
      _.each(devtools_keys, function(key) {
        _measures[key] = measures[key];

        var parts = key.split('_', 2); var tool = parts[1].toLoweCase();
        if (!self.map.devtools[tool]) {
          self.map.devtools[tool] = [];
        }
        measure.name = name;
        self.map.devtools[tool].push(measure);
      });
      callback(self.map);
    });
  };

  self._latestVersionMap = {
    release: "27",
    beta: "28",
    aurora: "29",
    nightly: "30"
  };

  self.getMeasuresByChannel = function(measureName, channel, versions, callback) {
    var length = versions.length, results = [], count = 0;
    _.each(versions, function(item) {
      var target = channel+'/'+item;

      self.telemetryInstance.loadEvolutionOverBuilds(target,
        measureName,
        function(histogram) {
          count++;
          results.push(histogram);
          if (count === length) {
            callback(result);
          }
      });
    });
  };

  self.getUsageGraph = function(version, name) {
    self.telemetryInstance.loadEvolutionOverBuilds(version, name, function(evolution) {
      var results = {
        yes: 0,
        no: 0,
        total: 0
      };
      var _i = 0;
      evolution.each(function(date, histogram, index) {
        _i++;

        histogram.each(function(count, start, end, index) {
          if (index === 0) {
            results.no += count;
            results.total += (count);
          }
          else if(index === 1) {
            results.yes += count;
            results.total += (count);
          }
        });
      });
      callback(results);
    });
  };

  /*
    exponential histograms are not great as-is for the kind of data
    we've collected, so we need to post-process them and count up simplified
    buckets of time: (strawman)
    1. 0s
    2. 1-60s
    3. 61s <= 10m
    4. 10m to 60m // 1 hour
    5. 61m to 481m // 1 hour to 8 hours
    6. 480m to 2400m // 8 hours => 40 Hours
    7. 2400m+ // more than 40 hours
  */

  // self.ranges = [
  //   {
  //     start:0,
  //     end:1,
  //     desc: "Never"
  //   },
  //   {
  //     start:1,
  //     end:60,
  //     desc: "Less than 1m"
  //   },
  //   {
  //     start:60,
  //     end:600,
  //     desc: "Less than 10m"
  //   },
  //   {
  //     start:600,
  //     end:3600,
  //     desc: "10m to 60m"
  //   },
  //   {
  //     start:3600,
  //     end:28800,
  //     desc: "1 to 8 hours"
  //   },
  //   {
  //     start:28800,
  //     end:144000,
  //     desc: "8 to 40 hours"
  //   },
  //   {
  //     start:144000,
  //     end:Infinity,
  //     desc: "More than 40 hours"
  //   }
  // ];

  function isInRange(range, start, end) {
    if (start >= range.start && end <= range.end) {
        return true;
    }
    return false;
  }

  self.Toolmap = {
    'Toolbox': {
      'time': 'DEVTOOLS_TOOLBOX_TIME_ACTIVE_SECONDS'
    },
    'Inspector': {
      'flag': 'DEVTOOLS_INSPECTOR_OPENED_PER_USER_FLAG',
      'time': 'DEVTOOLS_INSPECTOR_TIME_ACTIVE_SECONDS',
      'bool': 'DEVTOOLS_INSPECTOR_OPENED_BOOLEAN'
    },
    'Web Console': {
      'flag': 'DEVTOOLS_WEBCONSOLE_OPENED_PER_USER_FLAG',
      'time': 'DEVTOOLS_WEBCONSOLE_TIME_ACTIVE_SECONDS',
      'bool': 'DEVTOOLS_WEBCONSOLE_OPENED_BOOLEAN'
    },
    'Net Monitor': {
      'flag': 'DEVTOOLS_NETMONITOR_OPENED_PER_USER_FLAG',
      'time': 'DEVTOOLS_NETMONITOR_TIME_ACTIVE_SECONDS',
      'bool': 'DEVTOOLS_NETMONITOR_OPENED_BOOLEAN'
    },
    'Responsive Design': {
      'flag': 'DEVTOOLS_RESPONSIVE_OPENED_PER_USER_FLAG',
      'time': 'DEVTOOLS_RESPONSIVE_TIME_ACTIVE_SECONDS',
      'bool': 'DEVTOOLS_RESPONSIVE_OPENED_BOOLEAN'
    },
    'Style Editor': {
      'flag': 'DEVTOOLS_STYLEEDITOR_OPENED_PER_USER_FLAG',
      'time': 'DEVTOOLS_STYLEEDITOR_TIME_ACTIVE_SECONDS',
      'bool': 'DEVTOOLS_STYLEEDITOR_OPENED_BOOLEAN'
    },
    'Debugger': {
      'flag': 'DEVTOOLS_JSDEBUGGER_OPENED_PER_USER_FLAG',
      'time': 'DEVTOOLS_JSDEBUGGER_TIME_ACTIVE_SECONDS',
      'bool': 'DEVTOOLS_JSDEBUGGER_OPENED_BOOLEAN'
    },
    'Tilt': {
      'flag': 'DEVTOOLS_TILT_OPENED_PER_USER_FLAG',
      'time': 'DEVTOOLS_TILT_TIME_ACTIVE_SECONDS',
      'bool': 'DEVTOOLS_TILT_OPENED_BOOLEAN'
    },
    'Profiler': {
      'flag': 'DEVTOOLS_JSPROFILER_OPENED_PER_USER_FLAG',
      'time': 'DEVTOOLS_JSPROFILER_TIME_ACTIVE_SECONDS',
      'bool': 'DEVTOOLS_JSPROFILER_OPENED_BOOLEAN'
    },
    'Paint Flashing': {
      'flag': 'DEVTOOLS_PAINTFLASHING_OPENED_PER_USER_FLAG',
      'time': 'DEVTOOLS_PAINTFLASHING_TIME_ACTIVE_SECONDS',
      'bool': 'DEVTOOLS_PAINTFLASHING_OPENED_BOOLEAN'
    },
    'Scratchpad': {
      'flag': 'DEVTOOLS_SCRATCHPAD_OPENED_PER_USER_FLAG',
      'time': 'DEVTOOLS_SCRATCHPAD_TIME_ACTIVE_SECONDS',
      'bool': 'DEVTOOLS_SCRATCHPAD_OPENED_BOOLEAN'
    }
  };

  self.Toolnames = _.keys(self.Toolmap);

  self.getBucketsForTool = function(measure, version, ranges, callback) {
    var results = _.map(_.range(ranges.length), function() { return 0; });
    var subs = 0;
    self.telemetryInstance.loadEvolutionOverBuilds(version, measure, function(evolution) {
      var result = {};
      evolution.each(function(date, histogram, index) {
        subs += histogram.submissions();
        histogram.each(function(count, start, end, index) {
          _.each(ranges, function(range, i) {
            if (isInRange(range, start, end)) {
              results[i] += count;
            }
          });
        });
      });
      callback({results: results, submissions: subs});
    });

  };

  self.getVersionRange = function() {
    return _.compact(_.unique(_.map(self.versions, function(v) {
      var _v = parseInt(v.split('/').pop(), 10);
      if(/^[\d]+$/.test(_v) && _v >= 24) {
        return _v;
      }
    }))).sort();
  };

  self.getWeeklyToolUsage = function(windows, toolName, callback) {
    var collected = {};
    // in this case 'window' is an array with telemetry-friendly version strings eg aurora/29
    // loop through the windows
    var functions = _.map(windows, function(win) {
      var outer = _.map(win, function(version, channel) {
        var measures = self.Toolmap[toolName];
        var inner = _.map(measures, function(m) {
          return function(callback) {
            self.telemetryInstance.loadEvolutionOverTime(version, m, function(evolution) {
              var mapped = evolution.map(function (date, histogram, index) {
                var _strDate = formatDate(date);
                return histogram.map(function(count, start, end, index) {
                  return {
                    strDate: _strDate,
                    count: count,
                    start: start,
                    end: end,
                    index: index,
                    date: date,
                    measure: m
                  };
                });
              });
              // console.log(mapped);
              callback(null, mapped);
            });
          };
        });
        return inner;
      });
      return outer;
    });

    functions = _.flatten(functions);

    async.parallel(functions, function(err, results) {
      if (err) throw err;

      var flat_results = _.flatten(results);
      var dateGroups = {};
      _.each(flat_results, function(result) {
        if (!dateGroups[result.strDate]) {
          dateGroups[result.strDate] = [];
        }
        dateGroups[result.strDate].push(result);
      });

      var graph = {};
      // console.log();
      var tplObject = _.object(_.pluck(ranges, 'desc'), [{}, {}]);
      var mapped = {};

      _.each(dateGroups, function(counts, date) {
        var _m = moment(date);
        var _year = _m.year();
        var _weeks = _m.weeks();

        var strWeek = _m.clone().startOf('week').format('MM/DD/YYYY');
  
        if (!dateGroups['strWeek']) {
          dateGroups['strWeek'] = tplObject;
        }

        _.each(ranges, function(r) {        
          _.each(counts, function(count) {
            if (isInRange(r, count.start, count.end)) {
              var desc = r.desc;
              if (!mapped[desc]) {
                mapped[desc] = {};
              }

              if (!mapped[desc][strWeek]) {
                mapped[desc][strWeek] = {
                  count: count.count,
                  week: strWeek,
                  _intWeek: _weeks
                };
              }
              else {
                mapped[desc][strWeek].count += count.count;
              }
            }
          });
        });
        // console.log(strWeek);
      });
      // console.log(mapped);
      // ensure we are sorted properly

      // XXX need to make sure each hash has the dates sorted properly in chrono order

      callback(mapped);
    });


    // var _i = 0;
    // var limit = _.size(windows);
    // _.each(windows, function(win) {
    //   _i++;
    //   _.each(win, function(version, channel) {
    //     var measures = self.Toolmap[toolName];
    //     _.each(measures, function(m) {
    //       if (!collected[m]) {
    //         collected[m] = {};
    //       }
    //       self.telemetryInstance.loadEvolutionOverTime(version, m, function(evolution) {
    //         evolution.each(function (date, histogram, index) {
    //           var _strDate = formatDate(date);
    //           if (!collected[m][_strDate]) {
    //             collected[m][_strDate] = [];
    //           }
    //           histogram.each(function(count, start, end, index) {
    //             collected[m][_strDate].push({
    //               count: count,
    //               start: start,
    //               end: end,
    //               index: index,
    //               date: date
    //             });
    //           });
    //         });

    //         if (_i === limit) {
    //           console.dir(collected);
    //           callback(collected);
    //         }
    //       });
    //     });
    //   });
    // });
  };
};

function isInRange(range, start, end) {
  if (start >= range.start && end <= range.end) {
      return true;
  }
  return false;
}

var ranges = [{
    start: 300,
    end: Infinity,
    desc: "More than 5 minutes"
  },
  {
    start:1800,
    end:Infinity,
    desc: "More than 30 minutes"
  }
];