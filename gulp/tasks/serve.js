'use strict';
const browserSync  = require('browser-sync').create('kraken');
const gulp = require('gulp');

gulp.task('serve', (done) => {
  browserSync.init({
    open: false,
    port: 3000,
    server: ['dist'],
    notify: true
  });
  done();
});
