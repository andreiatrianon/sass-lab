const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

//Método para compilar os arquivos .scss sem precisar fazer o @import, e 'minificar' o arquivo

gulp.task('compile-sass', function () {
  return gulp.src('styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(concat("main.min.scss"))
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("public/"));
});

gulp.task('watch', function () {
  gulp.watch('styles/*.scss', ['compile-sass']);
})