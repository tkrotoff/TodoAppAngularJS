'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    usemin = require('gulp-usemin'),
    uglify = require('gulp-uglify'),
    minifyHtml = require('gulp-minify-html'),
    minifyCss = require('gulp-minify-css'),
    rev = require('gulp-rev'),
    clean = require('gulp-clean');

gulp.task('serve', function() {
  connect.server({
    root: '.',
    livereload: true
  });
});

gulp.task('livereload', function() {
  gulp.src(['app/**/*.html', 'app/**/*.js'])
    .pipe(watch())
    .pipe(connect.reload());
});

gulp.task('less', function () {
  gulp.src('app/styles/main.less')
    .pipe(less())
    .pipe(gulp.dest('app/styles'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('app/styles/*.less', ['less']);
});

gulp.task('build', function() {
  gulp.src('app/**/*.html')
    .pipe(usemin({
      css: [minifyCss(), 'concat'],
      //html: [minifyHtml({empty: true})],
      js: [uglify(), rev()]
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('clean', function() {
  return gulp.src('dist')
    .pipe(clean());
});

gulp.task('default', ['serve', 'livereload', 'less', 'watch']);
