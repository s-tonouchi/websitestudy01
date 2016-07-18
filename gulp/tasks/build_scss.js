var gulp         = require('gulp');
var run_sequence = require('run-sequence');
var error        = require('../util/error');

var buildSCSSFunction = function(cb) {
  return run_sequence('scsslint', 'compile_scss');
};

gulp.task('build_scss', buildSCSSFunction);
module.exports = buildSCSSFunction; 
