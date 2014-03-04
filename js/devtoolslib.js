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

  self.init = function() {
    return new Promise(function(resolve, reject) {
      self.telemetryInstance.init(function() {
        self.versions = self.telemetryInstance.versions();
        resolve(true);
      });
    });
  };

  self.getProbes = function(version) {
    var devtools_measures = [];
    return new Promise(function(resolve, reject) {
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

        resolve(out);
      });
    });
  };

  self.generateModel = function(measures, callback) {
    return new Promise(function(resolve, reject) {
      self.map = { DEVTOOLS: {} };
      // start assuming we have underscore
      _.each(measures, function(measure, name) {
        var parts = name.split('_', 2); var tool = parts[1];
        if (!self.map.DEVTOOLS[tool]) {
          self.map.DEVTOOLS[tool] = [];
        }
        measure['name'] = name;
        self.map.DEVTOOLS[tool].push(measure);
      });
      resolve(self.map);
    });
  };

  self._latestVersionMap = {
    release: "27",
    beta: "28",
    aurora: "29",
    nightly: "30"
  };

  self.getMeasuresByChannel = function(measureName, channel, versions) {
    var length = versions.length, results = [], count = 0;

    return new Promise(function(resolve, reject) {
      _.each(versions, function(item) {
        var target = channel+'/'+item;

        self.telemetryInstance.loadEvolutionOverBuilds(target,
          measureName,
          function(histogram) {
            count++;
            results.push(histogram);
            if (count === length) {
              resolve(result);
            }
        });
      });
    });
  };

  self.getUsageGraph = function(version, name) {
    return new Promise(function(resolve, reject) {
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
              results.total += (count)
            }
            else if(index === 1) {
              results.yes += count
              results.total += (count)
            }
          });
        });
        resolve(results);
      });
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

  self.getBucketsForTool = function(measure, version, ranges) {
    var results = _.map(_.range(ranges.length), function() { return 0; });
    var subs = 0;

    function isInRange(range, start, end) {
      if (start >= range.start && end <= range.end) {
          return true;
      }
      return false;
    }

    return new Promise(function(resolve, reject) {
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
        resolve({results: results, submissions: subs});
      });
    });
  };
};

