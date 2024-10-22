const gulp = require('gulp');
const imagemin = () => import('gulp-imagemin');
const less = require('gulp-less');

gulp.task('images', async function() {
    const imageminModule = await imagemin();
    return gulp.src('source/images/*')
        .pipe(imageminModule.default())
        .pipe(gulp.dest('dist/images'));
});

gulp.task('styles', function() {
    return gulp.src('source/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('default', gulp.series('images', 'styles'));