import gulp from "gulp";
import pug from "gulp-pug";
import replace from "gulp-replace";
import debug from "gulp-debug";
import touch from "gulp-touch-cmd";

gulp.task("pug", () =>
    gulp.src(["./src/pug/**/*.pug", "!./src/pug/_*.pug", "!./src/pug/blocks/*.pug", "!./src/pug/base/*.pug"])
        .pipe(pug({pretty: true}))
        .pipe(replace("../../"+$.path.dest, "")) // .pipe($.replace("../dest/", "../"))
        .pipe(gulp.dest("./"+$.path.dest))
        .pipe(debug({"title": "html"}))
        .on("end", $.browsersync.reload)
        .pipe(touch())
);
