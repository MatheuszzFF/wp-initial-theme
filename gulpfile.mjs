import gulp from 'gulp';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';

// webpackConfig is your existing webpack configuration
import webpackConfig from './webpack.config.js';
import imagemin from 'gulp-imagemin';
console.log(webpackConfig)

// gulp.task('css', function() {
//     return gulp.src('src/css/*.css')
//         .pipe(gulp.dest('dist/css/'));
// });

gulp.task('js', function() {
    console.log("Running JS task with Webpack config");
    return gulp.src('src/js/*.js')
        .pipe(webpackStream(webpackConfig))
        .pipe(gulp.dest('dist/js/'))
});

gulp.task('images', function () {
    console.log("Minifying images");
    return gulp .src("src/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/img/"));
})

gulp.task('watch', function() {
    gulp.watch('src/js/**/*.js', gulp.series('js'));
    gulp.watch('src/img/*', gulp.series('images'));
});


gulp.task('default', gulp.parallel('js', "images", 'watch'));