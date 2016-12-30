import config from '../../taskconfig';
import changed from 'gulp-changed';
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import $size from 'gulp-size';

/**
 * Compiles and deploys images.
 */
gulp.task('images', () => {
  return gulp.src(config.images.entry)
    .pipe(changed(config.images.output))
    .pipe(imagemin(config.images.imagemin))
    .pipe($size({ title: '[images]', gzip: true }))
    .pipe(gulp.dest(config.images.output));
});
