'use strict';

import config from '../../taskconfig';
import gulp from 'gulp';
import path from 'path';
import rimraf from 'rimraf';
import sequence from 'run-sequence';
import $replace from 'gulp-replace';
import $rev from 'gulp-rev';
import _ from 'lodash';

/**
 * Appends content hash to static files.
 */
gulp.task('rev', (callback) => {
  gulp.src(config.rev.entry)
    .pipe($rev())
    .pipe(gulp.dest(config.rev.output))
    .pipe($rev.manifest(config.rev.manifestFile))
    .pipe(gulp.dest(config.rev.output))
    .on('end', () => {
      const manifestFile = path.join(config.rev.output, config.rev.manifestFile);
      const manifest = require(manifestFile);
      let removables = [];
      let pattern = _.map(_.keys(manifest), v => (`${v}\\b`)).join('|');

      for (let v in manifest) {
        if (v !== manifest[v]) removables.push(path.join(config.rev.output, v));
      }

      removables.push(manifestFile);

      rimraf(`{${removables.join(',')}}`, () => {
        gulp.src(config.rev.replace)
          .pipe($replace(new RegExp(`${pattern}`, 'gi'), (m) => (manifest[m])))
          .pipe(gulp.dest(config.rev.output))
          .on('end', callback)
          .on('error', callback);
      });
    })
    .on('error', callback);
});