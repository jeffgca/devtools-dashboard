var main = function(callback) {
  var dd = new DevtoolsTelemetry(Telemetry);
  dd.init(function() {
    var windows = generateBuildWindows(32, 39); // need to automate this somehow
    dd.getWeeklyToolUsage(windows, 'Toolbox', callback);
  });
};