var gulp      = require('gulp');
var gutil     = require('gulp-util');
var htmlv     = require('gulp-html-validator');
var intercept = require('gulp-intercept');

var htmlValidateFunction = function(cb) {
  return gulp.src('src/html/**/*.html')
      .pipe(htmlv({format: 'json'}))
      .pipe(intercept(function(file){
          json = JSON.parse(file.contents.toString());
          if(json.messages.length > 0){
            json.messages.forEach(
              function (message) {
                gutil.log(gutil.colors.cyan('[gulp-html-validator] ') +
                          gutil.colors.white(file.path) +
                          gutil.colors.red(' [' + message.type + ']')             +
                          gutil.colors.white(' [' + message.lastLine + ':' + message.firstColumn + '] ' + message.message));
              });
            } else {
              gutil.log(gutil.colors.cyan('[gulp-html-validator] ') +
                        gutil.colors.white(file.path) +
                        gutil.colors.green(' ok'));
            }
            return file;
          }))
};

gulp.task('html_validate', htmlValidateFunction);
module.exports = htmlValidateFunction; 
