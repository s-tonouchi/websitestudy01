var gulp = require('gulp');

var copyHtmlFunction = function(cb) {
  gulp.src('src/html/**/*.html')
      .pipe(gulp.dest('build'));
};

gulp.task('copy_html', copyHtmlFunction);
module.exports = copyHtmlFunction;
