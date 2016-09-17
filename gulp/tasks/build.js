'use strict';

const argv = require('yargs').argv;
const gulp = require('gulp');
const shell = require('shelljs');

// 'gulp jekyll' -- builds your site with development settings
// 'gulp jekyll --prod' -- builds your site with production settings
gulp.task('jekyll', done => {
  if (!argv.prod) {
    shell.exec('jekyll build');
    done();
  } else if (argv.prod) {
    shell.exec('jekyll build --config _config.yml,_config.build.yml');
    done();
  }
});

// 'gulp doctor' -- literally just runs jekyll doctor
gulp.task('doctor', done => {
  shell.exec('jekyll doctor');
  done();
});
