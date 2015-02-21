var main = function(callback) {
  var start = 24,
      dd = new DevtoolsTelemetry(Telemetry);

  dd.init(function() {
    dd.getWeeklyChannelUsage('Toolbox', callback);
  });
};