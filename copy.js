const vfs = require('vinyl-fs');

vfs.src(['src/**/*', '!src/**/*.ts'])
  .pipe(vfs.dest('dist'));
