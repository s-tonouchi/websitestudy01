var gulp = require('gulp');
var run_sequence = require('run-sequence');


var buildTSFunction = function(cb) {
  return run_sequence('tslint', 'build_ts');
};

gulp.task('build_ts', buildTSFunction);
module.exports = buildTSFunction; 
