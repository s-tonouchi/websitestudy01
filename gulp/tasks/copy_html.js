var gulp      = require('gulp');
var gutil     = require('gulp-util');
var intercept = require('gulp-intercept');
var info      = require('../util/info');

var copyHtmlFunction = function(cb) {
  gulp.src('src/html/**/*.html')
      .pipe(intercept(function(file){
         info('copy_html', file.path, 'copyig');
         return file;
       }))
      .pipe(gulp.dest('build'));
};

gulp.task('copy_html', copyHtmlFunction);
module.exports = copyHtmlFunction;
