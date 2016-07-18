var gulp      = require('gulp');
var tslint    = require('gulp-tslint');
var intercept = require('gulp-intercept');
var info      = require('../util/info');
var error     = require('../util/error');

var tslintFunction = function(cb) {
  return gulp.src('src/ts/**/*.ts')
      .pipe(tslint({formatter: 'prose'}))
      .pipe(tslint.report({}))
      .on('error', function(e) {
         error('tslint', '', 'type script lint error detected.');
       });
};

gulp.task('tslint', tslintFunction);
module.exports = tslintFunction; 
