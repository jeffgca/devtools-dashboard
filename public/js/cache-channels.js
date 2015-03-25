var main = function(callback) {
  var start = 24,
      dd = new DevtoolsTelemetry(Telemetry);

  dd.init(function() {
    dd.getVersionRange(function(err, nightlyVersions) {
      var windows = generateBuildWindows(32, _.last(nightlyVersions));
      dd.getWeeklyChannelUsage(windows, 'Toolbox', callback);
    });

  });
};
