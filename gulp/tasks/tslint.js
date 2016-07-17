var gulp = require('gulp');
var tslint  = require('gulp-tslint');

var tslintFunction = function(cb) {
  gulp.src('src/ts/**/*.ts')
      .pipe(tslint({formatter: 'prose'}))
      .pipe(tslint.report());
};

gulp.task('tslint', tslintFunction);
module.exports = tslintFunction; 
