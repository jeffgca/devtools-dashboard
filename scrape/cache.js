var phantom = require('phantom'),
    fs = require('fs'),
    path = require('path'),
    connect = require('connect'),
    mkdirp = require('mkdirp');


var defaultDataFile = 'toolbox-weekly.json',
  defaultShell = 'cache-weekly.js';

var optimist = require('optimist'), argv = optimist
  .usage('Query and analyze telemetry data.\nUsage: $0 -o outputfile -s shellfile')
  .default('o', defaultDataFile)
  .alias('o', 'output')
  .describe('o', 'JSON data file name\n       ( stored to ./public/data/$file )')
  .default('s', defaultShell)
  .alias('s', 'shell')
  .describe('s', 'Which JS script to inject into the shell\n      ( found in ./public/js/$file )')
  .alias('h', 'help')
  .argv;

if (argv.h) {
  optimist.showHelp();
  process.exit();
}

console.log(argv);

var dataFile = path.join(__dirname, '../public/', 'data', argv.output);
var shellPath = path.join(__dirname, 'public', 'js', argv.shell);
var pageUrl = 'http://localhost:8090/cache.html';

var scraper = function(url, dir, port, callback) {
  var server = connect();
  server.use(connect.static(dir)).listen(port, function() {
    phantom.create(function (ph) {
      ph.createPage(function (page) {
        page.set('onLoadFinished', function(success) {
        });

        page.set('onCallback', function(results) {
          ph.exit();
          callback(results);
        });

        page.open(pageUrl, function (status) {
          console.log("INJECT", page.injectJs(shellPath));
          // console.log(Object.keys(page));

          page.includeJs('./js/'+argv.shell, function() {
            page.evaluate(function() {
              window.phantomLoaded = true;
              window.main(function(results) {
                console.log("got here");
                if (typeof callPhantom === 'function') {
                  window.callPhantom(results);
                }
              });
            });
          });
        });
      });
    });
  });
};

if (!module.parent) {
  scraper(pageUrl, 'public', 8090, function(results) {
    mkdirp(path.dirname(dataFile), function(e, r) {
      if (e) throw e;
      var out = {results: results, timestamp: Date.now()};
      fs.writeFile(dataFile, JSON.stringify(out), function(err, result) {
        if (err) console.log(err);
        console.log("Wrote file? " + dataFile);
        process.exit();
      });
    });
  });
}

module.exports = {
  scraper: scraper,
  pageUrl: pageUrl,
  dataFile: dataFile
};
