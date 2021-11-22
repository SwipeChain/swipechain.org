import gulp from "gulp";
import watch from "gulp-watch";

let minState = '';

gulp.task("watcher", () =>
    new Promise((res, rej) => {
        watch(["./src/pug/**/*.pug"], gulp.series("pug"));
        watch("./src/sass/**/*.{scss,sass}", gulp.series("styles"+minState));
        watch("./src/fonts/**/*", gulp.series("fonts"));
        watch(["./src/images/**/*", "!./src/images/sprite-*/**/*", "!./src/images/favicons/**/*"], gulp.series("images"));
        watch("./src/images/sprite-svg/*.svg", gulp.series("sprite"));
        watch("./src/js/**/*.{js,json}", gulp.series("scripts"+minState));
        watch("./src/html_direct_copying/**/*", gulp.series("html_direct_copying"));
        res();
    })
);

gulp.task("watcher_min", () => {
    minState = '_min';
    return gulp.series("watcher")();
});
gulp.task("watcher_unmin", () => {
    minState = '_unmin';
    return gulp.series("watcher")();
});