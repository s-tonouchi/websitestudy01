var gulp = require('gulp');
var sass = require('gulp-sass');


var buildScssFunction = function(cb) {
  return gulp.src('src/scss/**/*.scss')
             .pipe(sass().on('error', sass.logError))
             .pipe(gulp.dest('build/css'));
};

gulp.task('build_scss', buildScssFunction);
module.exports = buildScssFunction; 
