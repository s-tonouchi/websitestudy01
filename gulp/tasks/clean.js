var gulp = require('gulp');
var del  = require('del');
var info = require('../util/info');

var cleanFunction = function(cb) {
  return del(['build/**/*']).then(function(paths){
    paths.forEach(function(path){
      info('clean', path, 'deleted');
    });
  });
};

gulp.task('clean', cleanFunction);
module.exports = cleanFunction; 
