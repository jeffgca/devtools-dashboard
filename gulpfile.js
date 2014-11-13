/** 

To install node dependencies:

npm install --save gulp gulp-livereload serve-static connect

To use liveReload, add this to your page:

<script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>

*/
var fs = require('fs');
var mkdirp = require('mkdirp');
var path = require('path');
var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    dest = './public';

gulp.task('server', function(next) {
  var connect = require('connect'),
      server = connect();
  var _port = process.env.PORT || 8080;
  server.use(connect.static(dest)).listen(_port, function() {
    console.log(">>> listening on port "+_port);
    next();
  });
});

gulp.task('watch', ['server'], function() {
  var server = livereload();
  gulp.watch(dest + '/**').on('change', function(file) {
      server.changed(file.path);
  });
});

gulp.task('scrape', function(cb) {
  var cache = require('./scrape/cache');
  mkdirp(path.dirname(cache.dataFile), function(e, r) {
    if (e) throw e;
    cache.scraper(cache.pageUrl, './public', '8090', function(results) {
      fs.writeFile(cache.dataFile, results, function(err, result) {
        if (err) {
          cb(err);
        }
        cb(null);
        process.exit();
      });
    });
  });
});

gulp.task('default', ['watch']);
