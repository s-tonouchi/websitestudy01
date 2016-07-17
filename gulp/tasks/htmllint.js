var gulp = require('gulp');
var htmllint = require('gulp-htmllint');
var gutil = require('gulp-util');

var htmllintFunction = function(cb) {
  return gulp.src('src/html/**/*.html')
             .pipe(htmllint({}, htmllintReporter));
}

function htmllintReporter(filepath, issues) {
  if (issues.length > 0) {
    issues.forEach(function (issue) {
      gutil.log(gutil.colors.cyan('[gulp-htmllint]' + 
                gutil.colors.red(filepath + ' [' + issue.line + ',' + issue.column + ']: ') +
                gutil.colors.cyan('(' + issue.code + ') ' + 
                issue.msg)))});
    process.exitCode = 1;
  } else {
    gutil.log(gutil.colors.cyan('[gulp-htmllint]') + gutil.colors.yellow(' Passed'));
  }
}

gulp.task('htmllint', htmllintFunction);
		
