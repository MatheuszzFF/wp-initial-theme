import gulp from 'gulp';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';

// webpackConfig is your existing webpack configuration
import webpackConfig from './webpack.config.js';
console.log(webpackConfig)

gulp.task('css', function() {
    return gulp.src('src/css/*.css')
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('js', function() {
    console.log("Running JS task with Webpack config:", webpackConfig);
    return gulp.src('src/js/*.js')
        .pipe(webpackStream(webpackConfig))
        .pipe(gulp.dest('dist/js/'))
});

gulp.task('watch', function() {
    gulp.watch('src/css/*.css', gulp.series('css'));
    gulp.watch('src/js/**/*.js', gulp.series('js'));
});
gulp.task('default', gulp.parallel( 'css', 'js', 'watch'));