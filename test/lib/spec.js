describe("Get latest version data", function() {
  it("we get versions back", function(done) {
    Telemetry.init(function() {
      var devtoolsData = new DevtoolsTelemetry(Telemetry);

      var versions = devtoolsData.getVersions();

      expect(versions[0]).to.equal(gVersions[0]);

      expect(versions[versions.length]).to.equal(gVersions[versions.length]);

      done();
    });
  });

  it ("we get the correct latest version hash", function(done) {
    Telemetry.init(function() {
      var devtoolsData = new DevtoolsTelemetry(Telemetry);

      var versionHash = devtoolsData.getLatestVersions();

      expect(versionHash.aurora).to.equal("28");
      expect(versionHash.nightly).to.equal("29");

      done();
    });
  });
});

describe("Get latest version data", function() {

  it("gets devtools telemetry probes", function(done) {

    Telemetry.init(function() {
      var devtoolsData = new DevtoolsTelemetry(Telemetry);
      devtoolsData.getDevToolsProbes('nightly/29', function(err, result) {
        if (err) throw err;
        console.log(result);
        done();
      });
    });
  });
});
