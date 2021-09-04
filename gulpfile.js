const gulp = require("gulp");
const ts = require("gulp-typescript");
const sourcemaps = require("gulp-sourcemaps");

// pull in the project TypeScript config
const tsProject = ts.createProject("tsconfig.json");

gulp.task("scripts", () => {
  return tsProject
    .src()
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .js.pipe(
      sourcemaps.write(".", {
        sourceRoot: function (file) {
          return file.cwd + "/src";
        },
      })
    )
    .pipe(gulp.dest("dist"));
});

gulp.task("watch", function watchSrc() {
  return gulp.watch("src/**/*.ts", gulp.series("scripts"));
});

gulp.task("build", gulp.parallel("scripts"));

gulp.task("default", gulp.parallel("watch", "build"));
