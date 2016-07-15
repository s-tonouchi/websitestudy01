var gulp = require('gulp');
var ts = require('gulp-typescript');


var buildTsFunction = function(cb) {
  return gulp.src('src/ts/**/*.ts')
             .pipe(ts({
               noImplicitAny: true,
               out: 'output.js'
             }))
             .pipe(gulp.dest('build/js'));

};

gulp.task('build_ts', buildTsFunction);
module.exports = buildTsFunction; 
