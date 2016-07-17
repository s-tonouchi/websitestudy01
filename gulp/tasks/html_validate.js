var gulp      = require('gulp');
var gutil     = require('gulp-util');
var htmlv     = require('gulp-html-validator');
var intercept = require('gulp-intercept');
var error     = require('../util/error');
var warn      = require('../util/warn');
var info      = require('../util/info');

var htmlValidateFunction = function(cb) {
  return gulp.src('src/html/**/*.html')
      .pipe(htmlv({format: 'json'}))
      .pipe(intercept(function(file){
          json = JSON.parse(file.contents.toString());
          if(json.messages.length > 0){
            json.messages.forEach(
              function (message) {
                error('html_validate', file.path,  '[' + message.lastLine + ':' + message.firstColumn + '] ' + message.message);
              });
            } else {
                info('html_validate', file.path,  'ok');
            }
            return file;
          }))
};

gulp.task('html_validate', htmlValidateFunction);
module.exports = htmlValidateFunction; 
