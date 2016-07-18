var gulp     = require('gulp');
var watch    = require('gulp-watch');
var sequence = require('gulp-watch-sequence');

gulp.task('watch', () => {
  var queue = sequence(300);

  watch('src/html/**/*.html', {}, queue.getHandler('htmllint'   , 'html_validate', 'copy_html'));
  watch('src/scss/**/*.scss', {}, queue.getHandler('scsslint'   , 'compile_scss'              ));
  watch('src/ts/**/*.ts'    , {}, queue.getHandler('tslint'     , 'compile_ts'                ));
  watch('src/images/**/*'   , {}, queue.getHandler('copy_images'                              ));

  watch('build/**/*', {}, queue.getHandler('reload'));
});
