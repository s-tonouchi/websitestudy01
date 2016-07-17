var gulp = require('gulp');
var run_sequence = require('run-sequence');


var buildHTMLFunction = function(cb) {
  return run_sequence('htmllint', 'html_validate', 'copy_html');
};

gulp.task('build_html', buildHTMLFunction);
module.exports = buildHTMLFunction; 
