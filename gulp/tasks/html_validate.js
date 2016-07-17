var gulp = require('gulp');
var htmlv  = require('gulp-html-validator');

var htmlValidateFunction = function(cb) {
  gulp.src('src/html/**/*.html')
      .pipe(htmlv({format: 'html'}))
      .pipe(gulp.dest('out/html_validate'));
};

gulp.task('html_validate', htmlValidateFunction);
module.exports = htmlValidateFunction; 
