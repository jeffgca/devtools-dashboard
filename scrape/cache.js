var phantom = require('phantom'),
    fs = require('fs'),
    path = require('path'),
    connect = require('connect');

var dataFile = path.join(__dirname, '../data/toolbox-weekly.json');
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
          page.evaluate(function() {
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
};

if (!module.parent) {
  scraper(pageUrl, '../', 8090, function(err, results) {
    fs.writeFile(dataFile, results, function(err, result) {
      if (err) throw err;
      console.log("Wrote file: "+dataFile);
      process.exit();
    });
  });
}

module.exports = {
  scraper: scraper,
  pageUrl: pageUrl,
  dataFile: dataFile
};