var gulp         = require('gulp');
var run_sequence = require('run-sequence');
var error        = require('../util/error');

var buildTSFunction = function(cb) {
  return run_sequence('tslint', 'compile_ts');
};

gulp.task('build_ts', buildTSFunction);
module.exports = buildTSFunction; 
