var gulp  = require('gulp');
var ts    = require('gulp-typescript');
var error = require('../util/error');

var compileTsFunction = function(cb) {
  return gulp.src('src/ts/**/*.ts')
             .pipe(ts({
               noImplicitAny: true,
               out: 'output.js'
             }))
             .on('error', function(e){
                error('build_ts', '', 'compile error');
                return e.message;

              })
             .pipe(gulp.dest('build/js'));

};

gulp.task('compile_ts', compileTsFunction);
module.exports = compileTsFunction; 
