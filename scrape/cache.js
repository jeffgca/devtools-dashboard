#!/usr/bin/env node

var optimist = require('optimist');
var fs = require('fs');
var argv = optimist
    .usage('Usage: node ./bin/cli <command>')
    .argv;

var DevtoolsTelemetry = require('devtools-telemetry').DevtoolsTelemetry;
var targetFile = './public/data/toolbox-channels.json';
var dd = new DevtoolsTelemetry();
var _ = require('underscore');
var request = require('request');

request.get('http://fxver.paas.canuckistani.ca/', function(e, r, b) {
  if (e) throw e;
  // console.log("erb>", e, r, b);
  console.log("body>", JSON.parse(b));
});

function getWindows(callback) {
  request.get('http://fxver.paas.canuckistani.ca/', function(e, r, b) {
    if (e) throw e;
    var _ver = JSON.parse(b);
    // console.log("recent", parseInt(_ver.nightly));
    var windows = dd.generateBuildWindows(35, parseInt(_ver.nightly));
    dd.getWeeklyToolUsage(windows, 'Toolbox', callback);
  });
}

function main(command, callback) {
  dd.init(function() {
    switch(command) {
      case 'weekly':
        request.get('http://fxver.paas.canuckistani.ca/', function(e, r, b) {
          if (e) throw e;
          var _ver = JSON.parse(b);
          // console.log("recent", parseInt(_ver.nightly));
          var windows = dd.generateBuildWindows(35, parseInt(_ver.aurora));
          dd.getWeeklyToolUsage(windows, 'Toolbox', callback);
        });
        break;
      default:
        break;
    }
  });
}

if (!module.parent) {
  if (argv._.length === 0) {
    optimist.usage();
    process.exit();
  }
  else {
    var command = argv._.shift();
    main(command, function(results) {
      if (!results || _.keys(results).length === 0) {
        throw "Invalid / bad data?\n"+JSON.stringify(results);
      }

      var output = JSON.stringify({
        results: results,
        timestamp: Date.now()
      });

      fs.writeFile(targetFile, output, function(err) {
        if (err) throw err;
        console.log("Write file", targetFile);
      });
    });
  }
}
