import gulp from "gulp";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import replace from "gulp-replace";
import concat from "gulp-concat";
import tap from "gulp-tap";
import addsrc from "gulp-add-src";
import debug from "gulp-debug";
import { createRequire } from 'module'
const require = createRequire(import.meta.url);

function scripts(min){
    var libs_file = "src/js/_libs_concat.cjs";
    delete require.cache[require.resolve("../"+libs_file)];
    var libs_files = require("../"+libs_file);

    // Json Direct copying
    gulp.src("./src/js/**/*.json")
        .pipe(gulp.dest("./"+$.path.dest+"js/"));

    return gulp.src(["./src/js/**/*.js", "!./"+libs_file])
        .pipe(babel({presets: ["@babel/preset-env"]}))
        .pipe(min ? uglify() : tap(function(){})) // Minification
        .pipe(libs_files.length ? addsrc.prepend(libs_files) : tap(function(){}))
        .pipe(replace(/^.*sourceMappingURL.*$/gm, ""))
        .pipe(min ? concat("main.min.js") : tap(function(){})) // Concatenation to one file
        .pipe(gulp.dest("./"+$.path.dest+"js/"))
        .pipe(debug({"title": "Scripts "+(min ? 'Minified':'Unminified')}))
        .pipe($.browsersync.stream());
}
gulp.task("scripts_unmin", function () {
    return scripts(false);
});
gulp.task("scripts_min", function () {
    return scripts(true);
});
gulp.task("scripts", gulp.parallel("scripts_unmin", "scripts_min"));
