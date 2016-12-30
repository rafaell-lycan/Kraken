import config from '../../taskconfig';
import changed from 'gulp-changed';
import gulp from 'gulp';
import $size from 'gulp-size';

/**
 * Compiles and deploys svgs.
 */
gulp.task('svgs', () => {
  return gulp.src(config.svgs.entry)
    .pipe(changed(config.svgs.output))
    .pipe($size({ title: '[svgs]', gzip: true }))
    .pipe(gulp.dest(config.svgs.output));
});
