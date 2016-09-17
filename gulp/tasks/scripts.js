'use strict';
const argv         = require('yargs').argv;
const concat       = require('gulp-concat');
const gulp         = require('gulp');
const gzip         = require('gulp-gzip');
const newer        = require('gulp-newer');
const rename       = require('gulp-rename');
const rev          = require('gulp-rev');
const size         = require('gulp-size');
const sourcemaps   = require('gulp-sourcemaps');
const uglify       = require('gulp-uglify');
const when         = require('gulp-if');

gulp.task('scripts', () =>
  // NOTE: The order here is important since it's concatenated in order from
  // top to bottom, so you want vendor scripts etc on top
  gulp.src([
    'src/assets/js/vendor/jquery/*.js',
    'src/assets/js/plugins/**/*.js',
    'src/assets/js/main.js'
  ])
    .pipe(newer('dist/assets/js/index.js', {dest: 'dist/assets/js', ext: '.js'}))
    .pipe(when(!argv.prod, sourcemaps.init()))
    .pipe(concat('index.js'))
    .pipe(size({
      title: '[scripts] concatenate scripts into index file',
      showFiles: true
    }))
    .pipe(when(argv.prod, rename({suffix: '.min'})))
    .pipe(when(argv.prod, when('*.js', uglify({preserveComments: 'some'}))))
    .pipe(when(argv.prod, size({
      title: '[scripts] minify js',
      showFiles: true
    })))
    .pipe(when(argv.prod, rev()))
    .pipe(when(!argv.prod, sourcemaps.write('.')))
    .pipe(when(argv.prod, gulp.dest('dist/assets/js')))
    .pipe(when(argv.prod, when('*.js', gzip({append: true}))))
    .pipe(when(argv.prod, size({
      title: '[scripts] generate gzip files',
      gzip: true,
      showFiles: true
    })))
    .pipe(gulp.dest('dist/assets/js'))
);
