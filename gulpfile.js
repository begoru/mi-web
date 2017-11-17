let gulp = require('gulp');
let babel = require('gulp-babel');
let rollup = require('gulp-rollup');
let sass = require('gulp-sass');
var pug = require('gulp-pug');

gulp.task('default', ["assets","jade", "es6", "sass"])
gulp.task('assets', function() {
  return gulp.src('./src/assets/**/*')
        .pipe(gulp.dest('./dist/assets'))
})
gulp.task('jade', function buildHTML() {
  return gulp.src('./src/index.pug')
  .pipe(pug({
    // Your options in here.
  }))
  .pipe(gulp.dest('./dist'))
});
gulp.task('es6', function(){
  return gulp.src('./src/js/**/*.js')
          .pipe(rollup({
            input: './src/js/app.js',
            format: 'umd'
            }))
            .pipe(babel({
              presets: ['env']
            }))
          .pipe(gulp.dest('./dist/js'))

})

gulp.task('sass', function () {
  return gulp.src('./src/sass/theme.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*', ['jade','es6','sass']);
});
