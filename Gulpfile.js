'use strict';

var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('default', function() {
  // place code for your default task here
});

// Compiles LESS > CSS
gulp.task('less', function () {
  gulp.src('./app/styles/main.less')
    .pipe(less())
    .pipe(gulp.dest('./app/styles'));
});
