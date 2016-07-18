var gulp = require('gulp');
var htmllint = require('gulp-htmllint');
var gutil = require('gulp-util');
var info = require('../util/info');
var error = require('../util/error');

var htmllintFunction = function(cb) {
  return gulp.src('src/html/**/*.html')
             .pipe(htmllint({
                     rules: {
                       'indent-width'  : '2'       ,
                       'line-max-len'  : '120'
                     }
                   },htmllintReporter));
}

function htmllintReporter(filepath, issues) {
  if (issues.length > 0) {
    issues.forEach(function (issue) {
      error('htmllint', filepath, '[' + issue.line + ',' + issue.column + ']:(' + issue.code + ') ' + issue.msg);
    });
    process.exitCode = 1;
  } else {
    info('htmllint', filepath, 'ok');
  }
}

gulp.task('htmllint', htmllintFunction);
		
