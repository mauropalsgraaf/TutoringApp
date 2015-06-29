var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var react = require('gulp-react');
var babel = require('gulp-babel');
var shell = require('gulp-shell');

gulp.task('server', ['optimize'], function () {

  browserSync.init({
    server : {
      baseDir : './'
    }
  });

  gulp.watch('./app/scripts/main.js', ['reload']);
  gulp.watch('./app/scripts/**/*.jsx', ['reload']);

});

gulp.task('reload', ['transformJS'], /*['optimize'], uncomment to optimize, but make sure you change this ins index.html*/function () {
  browserSync.reload();
})

gulp.task('transformJS', function () {
  transformJS()
});

gulp.task('optimize', ['transformJS'], shell.task([
  'node app/build/r.js -o name=main baseUrl=app/scripts mainConfigFile=app/scripts/main.js ' +
  'out=app/scripts/dist/main-optimized.js generateSourceMaps=true preserveLicenseComments=false optimize=none'
]));

var transformJS = function (folder) {
  return gulp.src('./app/scripts/**/*.jsx')
    .pipe(react())
    .pipe(babel())
    .pipe(gulp.dest('./app/scripts/dist'));
}