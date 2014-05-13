var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    dest = './';

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

gulp.task('default', ['watch']);