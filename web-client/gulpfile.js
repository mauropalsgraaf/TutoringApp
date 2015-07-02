var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var react = require('gulp-react');
var babel = require('gulp-babel');
var shell = require('gulp-shell');
var plumber = require('gulp-plumber');

gulp.task('server', ['transformJS'], function () {

  browserSync.init({
    server : {
      baseDir : './'
    }
  });

  gulp.watch('./app/scripts/**/**/**/*.jsx', ['reload']);

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

gulp.task('includeRequireAndIndex', function () {
  return gulp.src(['./app/index.html', './app/scripts/require.js'])
  .pipe(gulp.dest('./app/dist'))
});

gulp.task('optimize', ['transformJS'], shell.task([ //NOT WORKING ANYMORE, MAKE SURE PATH IS CORRECT
  'node app/build/r.js -o name=main baseUrl=app/scripts mainConfigFile=app/scripts/main.js ' +
  'out=app/scripts/dist/main-optimized.js generateSourceMaps=true preserveLicenseComments=false optimize=none'
]));
