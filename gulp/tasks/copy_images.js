var gulp = require('gulp');

var copyImagesFunction = function(cb) {
  gulp.src('src/images/**/*')
      .pipe(gulp.dest('build/images'));
};

gulp.task('copy_images', copyImagesFunction);
module.exports = copyImagesFunction;
