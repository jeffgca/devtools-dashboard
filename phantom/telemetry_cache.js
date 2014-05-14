var phantom = require('phantom'),
    fs = require('fs'),
    connect = require('connect');

var pageUrl = 'http://localhost:8090/phantom.html';

var server = connect();

server.on('connection', function(data) {
  console.log([].slice.call(arguments));
});

server.use(connect.static('../')).listen(process.env.PORT || 8090, function() {
  phantom.create(function (ph) {
    ph.createPage(function (page) {
      page.set('onCallback', function(results) {
        fs.writeFile('../data/toolbox-weekly.json', JSON.stringify(results), function(err, result) {
          if (err) throw err;
          // console.log("run completed successfully.");
          ph.exit();
          setTimeout(function() {
            process.exit();
          }, 2000);
        });
      });

      page.open(pageUrl, function (status) {
        page.evaluate(
          function () { // run in the page
            window.main(function(results) {
              if (typeof window.callPhantom === 'function') {
                window.callPhantom({results: results, type: 'results'});
              }
            });
          }
        );
      });
    });
  });
});
