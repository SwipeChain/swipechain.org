import gulp from "gulp";
import debug from "gulp-debug";

gulp.task("serve", () => {
        gulp
        .src(["./src/Whitepaper.pdf"])
        .pipe(gulp.dest($.path.dest))
        .pipe(
            debug({
            title: "static doc",
            })
        );

        return new Promise((res, rej) => {
            $.browsersync.create();
            $.browsersync.init({
                server: "./"+$.path.dest,
                tunnel: false,
                port: 9000
            });
            res();
        })
    }
);
