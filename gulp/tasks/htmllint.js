var gulp = require('gulp');
var htmllint = require('gulp-htmllint');
var gutil = require('gulp-util');

var htmllintFunction = function(cb) {
  return gulp.src('src/html/**/*.html')
             .pipe(htmllint({
                     rules: {
                       'doctype-first' : 'smart'   ,
                       'doctype-html5' : 'true'    ,
                       'head-req-title': 'true'    ,
                       'html-req-lang' : 'true'    ,
                       'indent-width'  : '2'       ,
                       'line-max-len'  : '120'
                     }
                   },htmllintReporter));
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
    gutil.log(gutil.colors.cyan('[gulp-htmllint]') + 
              gutil.colors.yellow(filepath)        +
              gutil.colors.green(' Passed'));
  }
}

gulp.task('htmllint', htmllintFunction);
		
