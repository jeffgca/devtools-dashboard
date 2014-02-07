/*

Questions I would want to ask of telemetry:

* opening of the toolbox over time in a given channel, eg join channels in a series
* compare data from beta vs release vs aurora vs nightly for a specific measure

*/




var DevtoolsTelemetry = function(telemetryInstance) {
  this.telemetryInstance = telemetryInstance;
};

DevtoolsTelemetry.prototype = {

  _channels: false,
  _versions: false,
  _tools   : false,
  _versions: false,
  _measures: false,

  get versions() {
    return this.telemetryInstance.versions();
  },
  /* get the available channels */
  get channels() {
    var _channels = [];
    _.uniq(_.map(this._versions, function(version) {
      return version.split('/').shift();
    }));
  },
};

// var DevtoolsTelemetry = function(telemetryInstance) {
//   var self = this;
//   self.telemetryInstance = telemetryInstance;
//   self.DevtoolsMeasures = {};
//   self.DevtoolsModel = {};
//   self._versions = false;

//   self._getVersions = function() {
//     if (!self._versions) {
//       self._versions = self.telemetryInstance.versions();
//     }
//   };

//   self.getVersions = function() {
//     self._getVersions();
//     return self._versions;
//   };

//   self.getChannelList = function(channel /* one of release/beta/aurora/nightly */) {
//     if (!self._versions) {
//       self._getVersions();
//     }
//     return _.each(self._versions)
//   }

//   self.getLatestVersions = function() {
//     return self._latestVersionMap;
//   };

//   self.getDevToolsProbes = function(version, callback) {
//     var devtools_measures = [];
//     self.telemetryInstance.measures(version, function(measures) {
//       var probe_names = Object.keys(measures);
//       var devtools_keys = probe_names.filter(function(name) {
//         return (name.indexOf('DEVTOOLS_') !== -1);
//       });
//       var out = {};
//       devtools_keys.forEach(function(key) {
//         out[key] = measures[key];
//       });

//       self.DevtoolsMeasures = out;
//       self._createDevtoolsModel(out, function(err, result) {
//         if (err) throw err;
//         self.DevtoolsModel = result;
//       });
//       callback(null, out);
//     });
//   };

//   self._createDevtoolsModel = function(measures, callback) {

//     var map = { DEVTOOLS: {} };
//     // start assuming we have underscore
//     _.each(measures, function(measure, name) {
//       var parts = name.split('_', 2); var tool = parts[1];
//       if (!map.DEVTOOLS[tool]) {
//         map.DEVTOOLS[tool] = [];
//       }
//       measure['name'] = name;
//       map.DEVTOOLS[tool].push(measure);
//     });

//     console.log(map);
//   };

//   self._latestVersionMap = {
//     release: "26",
//     beta: "27",
//     aurora: "28",
//     nightly: "29"
//   };

//   self.getMeasureByChannel = function(measureName, channelName, callback) {
//     var versions = self.telemetryInstance.versions();        
//   };

// };



