var gulp = require('gulp');
var del  = require('del');

var cleanFunction = function(cb) {
  return del(['build/**/*']);
};

gulp.task('clean', cleanFunction);
module.exports = cleanFunction; 
