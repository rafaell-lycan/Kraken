'use strict';

import config from '../../taskconfig';
import gulp from 'gulp';
import $size from 'gulp-size';

/**
 * Compiles and deploys fonts.
 */
gulp.task('fonts', () => {
  return gulp.src(config.fonts.entry)
    .pipe($size({ title: '[fonts]', gzip: true }))
    .pipe(gulp.dest(config.fonts.output));
});
