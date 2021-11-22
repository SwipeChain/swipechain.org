import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import debug from 'gulp-debug';

gulp.task('sprite', () =>
    gulp
        .src('./src/images/sprite-svg/*.svg')
        .pipe(
            svgSprite({
                shape: {
                    id: {
                        generator: 'image-%s',
                    },
                    spacing: {
                        // Spacing related options
                        padding: 1, // Padding around all shapes
                    },
                },
                mode: {
                    symbol: {
                        inline: true,
                        dest: '../',
                        sprite: '../images/sprites/main.symbol.svg',
                    },
                },
            })
        )
        .pipe(gulp.dest('./' + $.path.dest + 'images/sprites/'))
        .pipe(debug({ title: 'sprite' }))
);
