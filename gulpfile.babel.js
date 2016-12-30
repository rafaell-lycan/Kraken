import config from './taskconfig';
import gulp from 'gulp';
import sequence from 'run-sequence';
import $util from 'gulp-util';

import requireDir from 'require-dir';

requireDir('./gulp/tasks', {recurse: true});

/**
 * Build task. This is the task that gets executed when you run the shell
 * command 'gulp build'. This task will wipe the compiled files and rebuild
 * everything, with on-complete options such as serving the app in the dev
 * server.
 *
 * @param {boolean} debug
 * @param {boolean} watch
 */
gulp.task('default', () => {
  let seq = ['images', 'svgs', 'videos', 'fonts', 'styles', 'scripts'];

  if (config.env.debug) seq.push('watch');
  sequence.apply(null, seq);
});

