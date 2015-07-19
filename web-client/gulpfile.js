var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var react = require('gulp-react');
var babel = require('gulp-babel');
var shell = require('gulp-shell');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');

gulp.task('server', ['transformJS'], function () {

  browserSync.init({
    server : {
      baseDir : './'
    }
  });

  gulp.watch('./app/scripts/**/**/**/**/**/*.jsx', ['reload']);
  gulp.watch('./app/styles/*.scss', ['reload']);

});

gulp.task('reload', ['transformJS'], function () {
  browserSync.reload();
});

gulp.task('transformJS', ['generateMainFile'], function () {
  return gulp.src('./app/scripts/**/**/**/*.jsx')
    .pipe(plumber())
    .pipe(react())
    .pipe(babel())
    .pipe(gulp.dest('./app/dist'));
});

gulp.task('generateMainFile', ['includeRequireAndIndex'], function () {
  return gulp.src('./app/scripts/main.jsx')
    .pipe(plumber())
    .pipe(react())
    .pipe(babel())
    .pipe(gulp.dest('./app/dist/'));
});

gulp.task('includeRequireAndIndex', ['compile-sass'], function () {
  return gulp.src(['./app/index.html', './app/scripts/require.js'])
    .pipe(gulp.dest('./app/dist'))
});

gulp.task('compile-sass', function () {
  gulp.src('./app/styles/*.scss')
    .pipe(plumber())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest("./app/dist/styles"));
});
