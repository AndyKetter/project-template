var gulp = require('gulp');
var webpack = require('webpack-stream');
gulp.task('default', function() {
    return gulp.src('')
    .pipe(webpack( require('./webpack.production.js') ))
    .pipe(gulp.dest('dist/'));
});
