var phantom = require('phantom'),
    fs = require('fs'),
    connect = require('connect');

var pageUrl = 'http://localhost:8090/phantom.html';

var server = connect();

server.on('connection', function(data) {
  console.log([].slice.call(arguments));
});

server.use(connect.static('./')).listen(8090, function() {
  phantom.create(function (ph) {
    ph.createPage(function (page) {
      page.set('onLoadFinished', function(success) {
        console.log(success);
        console.log(typeof main);
      });

      page.set('onCallback', function(results) {
        fs.writeFile('./data/toolbox-weekly.json', JSON.stringify(results), function(err, result) {
          if (err) {
            console.log(err);
            ph.exit();
            setTimeout(function() {
              process.exit();
            }, 2000);
          }
          // console.log("run completed successfully.");
          ph.exit();
          setTimeout(function() {
            process.exit();
          }, 2000);
        });
      });

      page.open(pageUrl, function (status) {
        page.evaluate(function() {
          window.main(function(results) {
            console.log("got here");
            if (typeof callPhantom === 'function') {
              window.callPhantom({results: results, type: 'results'});
            }
          });
        });
      });
    });
  });
});
