var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var react = require('gulp-react');
var babel = require('gulp-babel');
var shell = require('gulp-shell');

gulp.task('server', ['bundle'], function () {

  browserSync.init({
    server : {
      baseDir : './'
    }
  });

  gulp.watch('./app/scripts/**/*.jsx', ['reload']);
  gulp.watch('./app/scripts/*.jsx', ['reload']);
});

gulp.task('reload', ['bundle'], function () {
  browserSync.reload();
})

gulp.task('bundle', ['transformJS'], shell.task([
  'webmake app/scripts/dist/main.js app/build/bundle.js sourceMap=true ignoreErrors=true'
]));

gulp.task('transformJS', function () {
  return gulp.src('./app/scripts/**/*.jsx')
    .pipe(react())
    .pipe(babel())
    .pipe(gulp.dest('./app/scripts/dist'));
});