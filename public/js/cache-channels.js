var main = function(callback) {
  var start = 24,
      dd = new DevtoolsTelemetry(Telemetry);

  dd.init(function() {
    var end = _.last(dd.getVersionRange()); // get the latest nightly version
    var windows = generateBuildWindows(start, end);

    dd.getWeeklyChannelUsage(windows, 'Toolbox', callback);
  });
};