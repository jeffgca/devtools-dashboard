var main = function(callback) {
  var dd = new DevtoolsTelemetry(Telemetry);
  dd.init(function() {
    dd.getWeeklyToolUsage('Toolbox', callback);
  });
};