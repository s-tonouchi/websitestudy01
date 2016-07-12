var gulp = require('gulp');
var webpack = require('gulp-webpack');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var del = require('del');

gulp.task('default', ['connect', 'watch']);

gulp.task('connect', () => {
  return connect.server({
    port: 8080,
    root: './build',
    livereload: true
  });
});

gulp.task('reload', () => {
  return gulp.src('./build/**/*')
             .pipe(connect.reload());
});

gulp.task('watch', () => {
  gulp.watch(['src/html/**/*.html'], ['copy_html']);
  gulp.watch(['src/scss/**/*.scss'], ['build_scss']);
  gulp.watch(['src/ts/**/*.ts'], ['build_ts']);
  gulp.watch(['src/images/**/*'], ['copy_images']);

  gulp.watch(['build/**/*'], ['reload']);
});

gulp.task('copy_html', () => {
  gulp.src('./src/html/**/*.html')
      .pipe(gulp.dest('./build'));
});

gulp.task('build_scss', () => {
  return gulp.src('./src/scss/**/*.scss')
             .pipe(sass().on('error', sass.logError))
             .pipe(gulp.dest('./build/css'));
});

gulp.task('build_ts', () => {
  return gulp.src('./src/ts/**/*.ts')
             .pipe(ts({
               noImplicitAny: true,
               out: 'output.js'
             }))
             .pipe(gulp.dest('build/js'));
});

gulp.task('copy_images', () => {
  gulp.src('./src/images/**/*')
      .pipe(gulp.dest('./build/images'));
});

gulp.task('clean', () => {
  return del(['build/**/*']);
});
