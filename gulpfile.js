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
  gulp.src('./src/scss/*.scss')
    .pipe(sass())

    .pipe(concat('style.css'))
    .pipe(gulp.dest('./build/css'))

    .pipe(minifycss())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('copycss', function() {
  gulp.src(['./src/css/*.css', './bower_components/structural-core/build/structural.css'])
    .pipe(gulp.dest('./build/css'));
});

gulp.task('copyhtml', function() {
  gulp.src('./src/*.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('copyimg', function() {
  gulp.src('./src/img/*.*')
    .pipe(gulp.dest('./build/img'));
});

gulp.task('copyjs', function() {
  gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./build/js/'));
});


gulp.task('copylibs', function() {
  gulp.src(['./bower_components/jquery/dist/jquery.min.js', './bower_components/jquery/dist/jquery.min.map', './bower_components/Snap.svg/dist/snap.svg-min.js', './bower_components/structural-core/build/structural.min.js'])
    .pipe(gulp.dest('./build/js/lib'));
});

// gulp.watch('./src/scss/*.scss', ['scss-concat-minify']);

gulp.task('default', ['scss-concat-minify', 'copyhtml', 'copycss', 'copyimg', 'copyjs', 'copylibs']);