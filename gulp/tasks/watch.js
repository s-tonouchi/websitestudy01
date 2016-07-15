var gulp = require('gulp');

gulp.task('watch', () => {
  gulp.watch(['src/html/**/*.html'], ['copy_html']);
  gulp.watch(['src/scss/**/*.scss'], ['build_scss']);
  gulp.watch(['src/ts/**/*.ts'], ['build_ts']);
  gulp.watch(['src/images/**/*'], ['copy_images']);

  gulp.watch(['build/**/*'], ['reload']);
});
