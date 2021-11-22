import gulp from "gulp";
import debug from "gulp-debug";

gulp.task("fonts", () =>
    gulp.src("./src/fonts/**/*")
        .pipe(gulp.dest($.path.dest+"fonts/"))
        .pipe(debug({"title": "fonts"}))
);
