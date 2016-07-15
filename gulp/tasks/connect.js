var gulp = require('gulp');
var connect = require('gulp-connect');

var connectFunction = function(cb) {
  return connect.server({
    port: 8080,
    root: 'build',
    livereload: true
  });
};

gulp.task('connect', connectFunction);
module.exports = connectFunction; 
