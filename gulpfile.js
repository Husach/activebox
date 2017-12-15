var gulp = require("gulp");
var sass = require("gulp-sass");
var server = require("gulp-server-livereload");

//server
gulp.task("start", function() {
  gulp.src("./")
    .pipe(server({
      livereload: false,
      directoryListing: false,
      open: true
    }));
});
gulp.task("style", function () {
  return gulp.src("scss/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

gulp.task("watch", function() {
  gulp.watch("scss/*/**", ["style"]);
})

gulp.task("default", ["start", "watch"]);