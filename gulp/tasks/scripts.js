'use strict';

import config from '../../taskconfig';
import gulp from 'gulp';
import webpack from 'webpack';
import $size from 'gulp-size';
import $sourcemaps from 'gulp-sourcemaps';
import $util from 'gulp-util';

/**
 * Compiles all JavaScript bundle files. This task assumes that all bundle files
 * are located in /app/assets/js and ignores all sub-directories. File watching
 * is available here.
 *
 * @param {boolean} debug
 * @param {boolean} watch
 */
gulp.task('scripts', (callback) => {
  let guard = false;

  if (config.env.debug) {
    return webpack(config.scripts).watch(100, build(callback));
  }

  webpack(config.scripts).run(build(callback));

  function build(done) {
    return (err, stats) => {
      if (err) {
        throw new $util.PluginError('webpack', err);
      }

      $util.log($util.colors.green('[webpack]'), stats.toString());

      if (!guard && done) {
        guard = true;
        done();
      }
    };
  }
});
