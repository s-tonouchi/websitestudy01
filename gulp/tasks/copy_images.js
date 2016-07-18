var gulp = require('gulp');
var info = require('../util/info');
var intercept = require('gulp-intercept');

var copyImagesFunction = function(cb) {
  gulp.src('src/images/**/*')
      .pipe(intercept(function(file){
         info('copy_images', file.path, 'copying');
       }))
      .pipe(gulp.dest('build/images'));
};

gulp.task('copy_images', copyImagesFunction);
module.exports = copyImagesFunction;
