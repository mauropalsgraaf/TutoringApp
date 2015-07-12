var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');

gulp.task('server', ['transformES6'], function () {
  nodemon({
    script : 'server/dist/server.js',
    ext : 'js',

    env : {
      PORT : 8000
    },
    ignore : [
      './node_modules/**',
      './server/dist/**'
    ],
    tasks : ['transformES6']
  }).on('restart', function () {
    var now = new Date();
    console.log('server is restarting: ' + now.getHours() + ' Hours, ' + now.getMinutes() + ' Minutes, ' + now.getSeconds() + ' Seconds');
  });
});

gulp.task('transformES6', function () {
  return gulp.src(['./server/**/**/**/**/*.js', '!./server/dist/'])
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest('./server/dist/'));
})