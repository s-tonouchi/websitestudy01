var gutil = require('gulp-util');

var warn = function(module, file, message) {
  gutil.log(gutil.colors.cyan('[' + module + '] ') +
            gutil.colors.yellow('W ') +
            gutil.colors.yellow(file + ' ') +
            gutil.colors.yellow(message));
}

module.exports = warn;

