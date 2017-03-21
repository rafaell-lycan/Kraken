import config from '../../taskconfig';
import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';

/**
 * Deploy on github pages.
 */
gulp.task('deploy', () => {
  return gulp.src(config.deploy.path)
    .pipe(ghPages());
});
