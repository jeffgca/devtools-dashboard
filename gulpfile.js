/**

To install node dependencies:

npm install --save-dev gulp gulp-util gulp-livereload serve-static connect

To use liveReload, add this to your page:

<script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>

*/
var fs = require('fs');
var mkdirp = require('mkdirp');
var path = require('path');
var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    dest = './public';
var gutil = require('gulp-util');

var git = require('gulp-git');

gulp.task('push', function() {
  git.push('origin', 'master', function (err) {
    if (err) throw err;
  });
});

gulp.task('deploy', function() {
  git.push('paas', 'master', function (err) {
    if (err) throw err;
  });
});

gulp.task('sync', ['push', 'deploy']);

gulp.task('server', function(next) {
  var connect = require('connect'),
      server = connect();
  var _port = process.env.PORT || 8080;
  server.use(connect.static(dest)).listen(_port, function() {
    gutil.log("Listening on port", _port);
    next();
  });
});

gulp.task('watch', ['server'], function() {
  var server = livereload();
  gulp.watch(dest + '/**').on('change', function(file) {
      server.changed(file.path);
  });
});

gulp.task('default', ['watch']);
