var gVersions;

var DevtoolsTelemetry = function(telemetryInstance) {
  var self = this;

  self.getVersions = function() {
    return telemetryInstance.versions();
  };

  self.getLatestVersions = function() {
    return self._latestVersionMap;
  };

  self.getDevToolsProbes = function(version, callback) {
    var devtools_measures = [];
    telemetryInstance.measures(version, function(measures) {
      var probe_names = Object.keys(measures);
      var devtools_keys = probe_names.filter(function(name) {
        return (name.indexOf('DEVTOOLS_') !== -1);
      });
      var out = {};
      devtools_keys.forEach(function(key) {
        out[key] = measures[key];
      });

      callback(null, out);
    });
  };

  self._latestVersionMap = {
    release: "26",
    beta: "27",
    aurora: "28",
    nightly: "29"
  };
};

