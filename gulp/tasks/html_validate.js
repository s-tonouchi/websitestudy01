var gulp      = require('gulp');
var gutil     = require('gulp-util');
var htmlv     = require('gulp-html-validator');
var intercept = require('gulp-intercept');

var htmlValidateFunction = function(cb) {
  gulp.src('src/html/**/*.html')
      .pipe(htmlv({format: 'json'}))
      .pipe(intercept(function(file){
          json = JSON.parse(file.contents.toString());
          json.messages.forEach(function (message) {
            gutil.log(
              gutil.colors.cyan('[gulp-html-validator] ') +
              gutil.colors.red(message.type)             +
              gutil.colors.white(' [' + message.lastLine + ':' + message.firstColumn + '] ' + message.message)
            )
          });
      }));
};

gulp.task('html_validate', htmlValidateFunction);
module.exports = htmlValidateFunction; 
