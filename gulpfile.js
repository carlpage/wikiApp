var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var cleanCSS = require('gulp-clean-css');
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');

var plumberErrorHandler = { errorHandler: notify.onError({
    title: 'Gulp',
    message: 'Error: <%= error.message %>'
  })
};

gulp.task('styles', function() {
  gulp.src('./scss/main.scss')
    .pipe(plumber({errorHandler: notify.onError(plumberErrorHandler)}))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./scss/*.scss', ['styles']);
  gulp.watch('./**/*.html').on('change', browserSync.reload());
});

gulp.task('default', ['styles', 'serve']);
