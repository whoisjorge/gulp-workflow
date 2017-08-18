import gulp from 'gulp'
import browserSync from 'browser-sync'
import sass from 'gulp-sass'
import moduleImporter from 'sass-module-importer'
import autoprefixer from 'gulp-autoprefixer'
import pump from 'pump'

/*
 *                              DEVELOPMENT **
 *                                            **
 *  These are the main development gulp tasks  ***
 */

// SASS
gulp.task('sass', function () {
  gulp.src('./src/scss/**/*.scss')
    .pipe(sass({ importer: moduleImporter() }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./dist/css'))
    // Enable browserSync
    .pipe(browserSync.stream())
})

// JavaScript
gulp.task('js', function (cb) {
  pump([
    gulp.src('./src/js/*.js'),
    // TODO: npm install --save-dev gulp-babel
    gulp.dest('./dist/js')
  ], cb)
})

// HTML
gulp.task('html', () => {
  return gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist'))
})
