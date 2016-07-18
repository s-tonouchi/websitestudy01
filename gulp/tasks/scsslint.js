var gulp = require('gulp');
var sassLint  = require('gulp-sass-lint');

var scsslintFunction = function(cb) {
  return gulp.src('src/scss/**/*.scss')
      .pipe(sassLint())
      .pipe(sassLint.format())
      .pipe(sassLint.failOnError());
};

gulp.task('scsslint', scsslintFunction);
module.exports = scsslintFunction; 
