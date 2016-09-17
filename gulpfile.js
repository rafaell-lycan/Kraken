'use strict';

const gulp       = require('gulp');
const requireDir = require('require-dir');
const tasks      = requireDir('./gulp/tasks', {recurse: true});

gulp.task('assets', ['styles', 'scripts']);

gulp.task('build', ['clean', 'assets', 'jekyll', 'html']);

gulp.task('default', ['build', 'serve', 'watch']);
