// utility for concurrency
var Pile = function() {
   this.pile = [];
   this.concurrency = 0;
   this.done = null;
   this.max_concurrency = 10;
}

Pile.prototype = {
  add: function(callback) {
   this.pile.push(callback);
  },
  run: function(done, max_concurrency) {
      this.done = done || this.done;
      this.max_concurrency = max_concurrency || this.max_concurrency;
      var target = this.pile.length;
      var that = this;
      var next = function() {
         that.concurrency--;
         (--target == 0 ? that.done() : that.run());
      };
      while(this.concurrency < this.max_concurrency && this.pile.length > 0) {
         this.concurrency++;
         var callback = this.pile.shift();
         callback(next);
      }
   }
};

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

  self._getVersions = function(callback) {
    if (!self.versions) {
      self.versions = self.telemetryInstance.versions();
    }
    if (callback !== void 0) {
      callback(null, true)
    }
  };

  self.getVersions = function() {
    self._getVersions();
    return self.versions;
  };

  self.getChannelList = function(channel /* one of release/beta/aurora/nightly */) {
    if (!self.versions) {
      self._getVersions();
    }
    return _.each(self.versions)
  }

  self.getLatestVersions = function() {
    return self._latestVersionMap;
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
      self.generateModel(out, function(err, result) {
        if (err) throw err;
        self.DevtoolsModel = result;
      });
      callback(null, out);
    });
  };

  self.generateModel = function(measures, callback) {

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
    callback(null, self.map);
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
            callback(null, results);
          }
      });
    });
  };

  self.getUsageGraph = function(version, name, callback) {
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
      callback(null, results);
    });
  };

  // initialize our data
  self._getVersions();

  self.Reload = function() {
    // some way to reload from Telemetry's servers
  };
};
