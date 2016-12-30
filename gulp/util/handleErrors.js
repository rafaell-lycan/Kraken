'use strict';

import $notify from 'gulp-notify';

export default function(error) {

  let args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  $notify.onError({
    title: 'Compile Error',
    message: 'Error: <%= error.message %>',
    sound: 'Beep'
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
};