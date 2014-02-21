var devtoolsData;

before(function(done) {
  Telemetry.init(function() {
    devtoolsData = new DevtoolsTelemetry(Telemetry);
    done();
  });
});

// describe("Get latest version data", function() {
//   it("we get versions back", function(done) {
//     var versions = devtoolsData.versions;

//     expect(versions[0]).to.equal(gVersions[0]);
//     expect(versions[versions.length]).to.equal(gVersions[versions.length]);

//     done();
//   });

//   it ("we get the correct latest version hash", function(done) {
//     var versionHash = devtoolsData.getLatestVersions();
//     expect(versionHash.aurora).to.equal("29");
//     expect(versionHash.nightly).to.equal("30");
//     done();
//   });
// });

// describe("Get latest version data", function() {
//   it("gets devtools telemetry probes", function(done) {
//     devtoolsData.getProbes('nightly/29', function(err, result) {
//       if (err) throw err;
//       done();
//     });
//   });
// });

// describe("Get a measure for a channel", function() {

//   var measure = 'DEVTOOLS_TOOLBOX_TIME_ACTIVE_SECONDS';

//   it("gets a histogram back for DEVTOOLS_TOOLBOX_TIME_ACTIVE_SECONDS", function(done) {
//     devtoolsData.getMeasuresByChannel(measure, 'aurora', 
//       [29],
//       function (err, results) {
//         if (err) throw err;
//         expect(results.length).to.equal(1);
//         done();
//       });
//   });

//   it("gets 4 versions worth of histograms back for DEVTOOLS_TOOLBOX_TIME_ACTIVE_SECONDS", function(done) {
//     devtoolsData.getMeasuresByChannel(measure, 
//       'aurora', 
//       [26, 27, 28, 29],
//       function(err, results) {
//         expect(results.length).to.equal(4);
//         done();
//     });
//   });
// });

describe("Test getUsageGraph", function() {
  var measure = 'DEVTOOLS_WEBCONSOLE_OPENED_PER_USER_FLAG';
  it("totals are equal", function(done) {
    devtoolsData.getUsageGraph('nightly/30', measure, function(e, r) {
      console.log(r);

      expect((r.yes + r.no)).to.equal(r.total);
      done();
    });
  });
});
