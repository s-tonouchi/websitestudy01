var gulp = require('gulp');
var connect = require('gulp-connect');

var reloadFunction = function(cb) {
  return gulp.src('build/**/*')
             .pipe(connect.reload());
};

gulp.task('reload', reloadFunction);
module.exports = reloadFunction; 
