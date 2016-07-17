var gutil = require('gulp-util');

var info = function(module, file, message) {
  gutil.log(gutil.colors.cyan('[' + module + '] ') +
            gutil.colors.green('I ') +
            gutil.colors.green(file.path + ' ') +
            gutil.colors.green(message));
}

module.exports = info;

