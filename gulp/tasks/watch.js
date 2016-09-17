'use strict';
const browserSync  = require('browser-sync').get('kraken');
const gulp = require('gulp');
const reload = browserSync.reload;

gulp.task('watch', () => {
  gulp.watch(['src/**/*.md', 'src/**/*.html', 'src/**/*.yml'], ['jekyll', reload]);
  gulp.watch(['src/**/*.xml', 'src/**/*.txt'], ['jekyll', reload]);
  gulp.watch('src/assets/js/**/*.js', ['scripts', reload]);
  gulp.watch('src/assets/scss/**/*.scss', ['styles']);
  // gulp.watch('src/assets/img/**/*', ['images', reload]);
});
