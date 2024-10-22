const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');

// Task to compile LESS files
gulp.task('less', function () {
    return gulp.src('./src/less/**/*.less') // Source folder containing the LESS files
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./dist/css')); // Destination folder for compiled CSS files
});

// Default task to run when `gulp` is called without arguments
gulp.task('default', gulp.series('less'));