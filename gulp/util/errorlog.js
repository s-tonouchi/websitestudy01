var gutil = require('gulp-util');

var error = function(module, file, message) {
  gutil.log(gutil.colors.cyan('[' + module + '] ') +
            gutil.colors.red('E ') +
            gutil.colors.red(file.path + ' ') +
            gutil.colors.red(message));
}

module.exports = error;

