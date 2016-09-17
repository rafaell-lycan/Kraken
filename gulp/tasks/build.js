'use strict';

const argv = require('yargs').argv;
const gulp = require('gulp');
const size = require('gulp-size');
const shell = require('shelljs');

// 'gulp jekyll' -- builds your site with development settings
// 'gulp jekyll --prod' -- builds your site with production settings
gulp.task('site', done => {
  if (!argv.prod) {
    shell.exec('jekyll build');
    done();
  } else if (argv.prod) {
    shell.exec('jekyll build --config _config.yml,_config.build.yml');
    done();
  }
});

gulp.task('site:size', () =>
  gulp.src(['src/**/*', '!src/assets/**/*', '!src/assets'], {dot: true})
    .pipe(size({title: 'Jekyll'}))
);


// 'gulp doctor' -- literally just runs jekyll doctor
gulp.task('site:check', done => {
  shell.exec('jekyll doctor');
  done();
});
