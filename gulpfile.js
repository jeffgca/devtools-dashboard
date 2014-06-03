var fs = require('fs');
var mkdirp = require('mkdirp');
var path = require('path');
var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    dest = './public';

gulp.task('server', function(next) {
  var connect = require('connect'),
      server = connect();
  server.use(connect.static(dest)).listen(process.env.PORT || 8080, next);
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
