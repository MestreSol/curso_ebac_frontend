const gulp = require('gulp');
const imagemin = () => import('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));

gulp.task('images', async function() {
    const imageminModule = await imagemin();
    return gulp.src('source/img/*')
        .pipe(imageminModule.default())
        .pipe(gulp.dest('dist/images'));
});

gulp.task('styles', function() {
    return gulp.src('source/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('default', gulp.series('images', 'styles'));