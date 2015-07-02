var gulp = require("gulp"),
  nodemon = require("nodemon")

gulp.task("server", function () {
  nodemon({
    script : 'server/server.js',
    ext : 'js',

    env : {
      PORT : 8000
    },
    ignore : [
      './node_modules/**'
    ]
  }).on("restart", function () {
    var now = new Date();
    console.log("server is restarting: " + now.getHours() + " Hours, " + now.getMinutes() + " Minutes, " + now.getSeconds() + " Seconds");
  });
})