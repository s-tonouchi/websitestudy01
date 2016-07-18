var gulp = require('gulp');
var sass = require('gulp-sass');


var compileScssFunction = function(cb) {
  return gulp.src('src/scss/**/*.scss')
             .pipe(sass().on('error', sass.logError))
             .pipe(gulp.dest('build/css'));
};

gulp.task('compile_scss', compileScssFunction);
module.exports = compileScssFunction; 
