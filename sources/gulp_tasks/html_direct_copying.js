import gulp from "gulp";
import newer from "gulp-newer";
import debug from "gulp-debug";

gulp.task("html_direct_copying", () =>
    // Just direct copying
    gulp.src("./src/html_direct_copying/**/*")
        .pipe(newer("./"+$.path.dest))
        .pipe(gulp.dest("./"+$.path.dest))
        .pipe(debug({"title": "html_direct_copying"}))
);
