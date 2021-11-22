import gulp from "gulp";
import plumber from "gulp-plumber";
import sourcemaps from "gulp-sourcemaps";
import replace from "gulp-replace";
import gulpSass from "gulp-sass";
import dartSass from "sass";
import autoprefixer from "gulp-autoprefixer";
import mincss from "gulp-clean-css";
import rename from "gulp-rename";
import debug from "gulp-debug";
import touch from "gulp-touch-cmd";

const sass = gulpSass(dartSass);

const styles = (min) =>
    gulp.src(["./src/sass/*.{scss,sass}", "!./src/sass/**/_*.{scss,sass}", "!./src/vendor/**/*.css"])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer())
        .pipe(replace("../../../"+$.path.dest, "../")) // replaces paths in generated .scss files and if you choose file relatively in the sources/src dirs
        .pipe(mincss({format: min ? '' : 'beautify', compatibility: "*", level: {1: {specialComments: 0}}})) // * — means IE 10+, also possible ie9, ie8
        .pipe(rename({suffix: min ? '.min' : ''}))
        .pipe(plumber.stop())
        .pipe(sourcemaps.write("./maps/"))
        .pipe(gulp.dest("./"+$.path.dest+"css/"))
        .pipe(debug({"title": "Styles "+(min ? 'Minified':'Unminified')}))
        .pipe($.browsersync.stream())
        .pipe(touch());

gulp.task("styles_unmin", () =>
    // Unminified
    styles(false)
);
gulp.task("styles_min", () =>
    // Minified
    styles(true)
);
gulp.task("styles", gulp.parallel("styles_unmin", "styles_min"));