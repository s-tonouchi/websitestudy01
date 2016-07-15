var gulp = require('gulp');
var run_sequence = require('run-sequence');


var buildFunction = function(cb) {
  run_sequence('clean', ['copy_html', 'copy_images', 'build_scss', 'build_ts']);
};

gulp.task('build', buildFunction);
module.exports = buildFunction; 
