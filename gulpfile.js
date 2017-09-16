let gulp = require('gulp');
let babel = require('gulp-babel');
let rollup = require('gulp-rollup');

gulp.task('default', ["html", "es6"])

gulp.task('html', function(){
  return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'))
})
gulp.task('es6', function(){
  return gulp.src('./src/js/**/*.js')
          .pipe(rollup({
            entry: './src/js/app.js'
            }))
            .pipe(babel({
              presets: ['env']
            }))
          .pipe(gulp.dest('./dist/js'))

})
