'use strict';
const del  = require('del');
const gulp = require('gulp');

gulp.task('clean', () => {
  return del(['dist']);
});

gulp.task('clean:gzip', () => {
  return del(['dist/**/*.gz']);
});

gulp.task('clean:images', () => {
  return del(['dist/assets/img']);
});
