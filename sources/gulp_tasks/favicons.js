import gulp from "gulp";
import favicons from "gulp-favicons";
import debug from "gulp-debug";

gulp.task("favicons", () =>
    gulp.src("./src/images/favicons/*.{jpg,jpeg,png,gif}")
        .pipe(favicons({
            path: "./",
            appName: "",
            appShortName: "",
            appDescription: "",
            icons: {
                appleIcon: true,
                favicons: true,
                online: false,
                appleStartup: false,
                android: true,
                firefox: false,
                yandex: true,
                windows: true,
                coast: false
            }
        }))
        .pipe(gulp.dest($.path.dest+"images/favicons/"))
        .pipe(debug({"title": "favicons"}))
);