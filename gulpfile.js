var gulp = require('gulp'),
    clean = require('gulp-clean'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename');

gulp.task('clean', function() {
  return gulp.src('./build/')
    .pipe(clean());
});

gulp.task('scss-concat-minify', function() {
  gulp.src('./_sass/*.scss')
    .pipe(sass())

    .pipe(concat('style.css'))
    .pipe(gulp.dest('./css'))

    .pipe(minifycss())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('copylibs', function() {
  gulp.src(['./bower_components/jquery/dist/jquery.min.js', './bower_components/jquery/dist/jquery.min.map', './bower_components/Snap.svg/dist/snap.svg-min.js', './bower_components/structural-core/build/structural.min.js'])
    .pipe(gulp.dest('./js/lib'));
});

// gulp.watch('./src/scss/*.scss', ['scss-concat-minify']);

gulp.task('default', ['copylibs', 'scss-concat-minify']);