'use strict';
const argv         = require('yargs').argv;
const autoprefixer = require('autoprefixer');
const browserSync  = require('browser-sync').get('kraken');
const cssnano      = require('gulp-cssnano');
const gulp         = require('gulp');
const gzip         = require('gulp-gzip');
const postcss      = require('gulp-postcss');
const rename       = require('gulp-rename');
const rev          = require('gulp-rev');
const sass         = require('gulp-sass');
const size         = require('gulp-size');
const sourcemaps   = require('gulp-sourcemaps');
const when         = require('gulp-if');

gulp.task('styles', () =>
  gulp.src(['src/assets/scss/main.scss'])
    .pipe(when(!argv.prod, sourcemaps.init()))
    .pipe(sass({
      precision: 10
    }).on('error', sass.logError))
    .pipe(postcss([
      autoprefixer({browsers: ['last 2 versions', '> 5%', 'IE 9']})
    ]))
    .pipe(size({
      title: '[styles] convert to css',
      showFiles: true
    }))
    .pipe(when(argv.prod, rename({suffix: '.min'})))
    .pipe(when(argv.prod, when('*.css', cssnano({autoprefixer: false}))))
    .pipe(when(argv.prod, size({
      title: '[styles] minify css',
      showFiles: true
    })))
    .pipe(when(argv.prod, rev()))
    .pipe(when(!argv.prod, sourcemaps.write('.')))
    .pipe(when(argv.prod, gulp.dest('dist/assets/css')))
    .pipe(when(argv.prod, when('*.css', gzip({append: true}))))
    .pipe(when(argv.prod, size({
      title: '[styles] generate gzip files',
      gzip: true,
      showFiles: true
    })))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(when(!argv.prod, browserSync.stream()))
);
