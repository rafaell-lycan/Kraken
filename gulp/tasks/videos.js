import config from '../../taskconfig';
import changed from 'gulp-changed';
import gulp from 'gulp';
import $size from 'gulp-size';

/**
 * Compiles and deploys videos.
 */
gulp.task('videos', () => {
  return gulp.src(config.videos.entry)
    .pipe(changed(config.videos.output))
    .pipe($size({ title: '[videos]', gzip: true }))
    .pipe(gulp.dest(config.videos.output));
});