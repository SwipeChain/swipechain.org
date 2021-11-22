import gulp from "gulp";

gulp.task("serve", () =>
    new Promise((res, rej) => {
        $.browsersync.create();
        $.browsersync.init({
            server: "./"+$.path.dest,
            tunnel: false,
            port: 9000
        });
        res();
    })
);