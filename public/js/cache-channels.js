var main = function(callback) {
  var start = 24,
      dd = new DevtoolsTelemetry(Telemetry);

  dd.init(function() {
    var windows = generateBuildWindows(32, 39);
    dd.getWeeklyChannelUsage(windows, 'Toolbox', callback);
  });
};