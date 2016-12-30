import config from '../../taskconfig';
import gulp from 'gulp';

/**
 * Watch for file changes.
 */
gulp.task('watch', () => {
  let entries = config.watch.entries;
  for (let i = 0; i < entries.length; i++) {
    let entry = entries[i];
    gulp.watch(entry.files, entry.tasks);
  }
});