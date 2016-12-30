import autoprefixer from 'autoprefixer';
import config from '../../taskconfig';
import $cssnano from 'gulp-cssnano';
import gulp from 'gulp';
import handleErrors from '../util/handleErrors';
import $postcss from 'gulp-postcss';
import plumber from 'gulp-plumber';
import $sass from 'gulp-sass';
import $size from 'gulp-size';
import $sourcemaps from 'gulp-sourcemaps';
import when from 'gulp-if';

/**
 * Compiles and deploys stylesheets.
 *
 * @param {boolean} debug
 */
gulp.task('styles', () => {
    return gulp.src(config.styles.entry)
      .pipe(plumber())
      .pipe(when(config.env.debug, $sourcemaps.init()))
      .pipe($sass(config.styles.options))
      .on('error', handleErrors)
      .pipe($postcss([autoprefixer(config.styles.autoprefixer)]))
      .pipe($size({ title: '[styles]', showFiles: true}))
      .pipe(when(!config.env.debug, when('*.css', $cssnano({autoprefixer: false}))))
      .pipe(when(config.env.debug, $sourcemaps.write('.')))
      .pipe($size({ title: '[styles:app]', gzip: true }))
      .pipe(gulp.dest(config.styles.output));
});
