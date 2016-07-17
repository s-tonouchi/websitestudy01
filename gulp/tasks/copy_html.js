var gulp      = require('gulp');
var gutil     = require('gulp-util');
var intercept = require('gulp-intercept');

var copyHtmlFunction = function(cb) {
  gulp.src('src/html/**/*.html')
      .pipe(intercept(function(file){
         gutil.log(gutil.colors.cyan('[copy_html] ') +
                   gutil.colors.white('copying ' + file.path));
         return file;
       }))
      .pipe(gulp.dest('build'));
};

gulp.task('copy_html', copyHtmlFunction);
module.exports = copyHtmlFunction;
