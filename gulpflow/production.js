import gulp from 'gulp'
import chalk from 'chalk'
import autoprefixer from 'gulp-autoprefixer'
import cssnano from 'gulp-cssnano'
import uglify from 'gulp-uglify'
import pump from 'pump'
import htmlmin from 'gulp-htmlmin'
import imagemin from 'gulp-imagemin'

/*
  *
  * PRODUCTION TASK
  *
*/
gulp.task('build', ['css:min', 'js:min', 'html:min', 'image:min'], () => {
  console.log(chalk.black.bgYellow('\n .dist/ is now READY for PRODUCTION') + ' 🚀 \n')
})

/**
 * CSS minification
 */
gulp.task('css:min', () => {
  gulp.src('dist/css/**/*.css')
    .pipe(cssnano({
      discardComments: {removeAll: true}
    }))
    .pipe(autoprefixer({
      browsers: ['last 4 versions', '> 1%'],
      cascade: false
    }))

    .pipe(gulp.dest('dist/css'))
})

/**
 * JavaScript minification
 */
gulp.task('js:min', (cb) => {
  pump([
    gulp.src('dist/js/*.js'),
    uglify(),

    gulp.dest('dist/js')
  ], cb)
})

/**
 * HTML minification
 */
gulp.task('html:min', () => {
  return gulp.src('dist/**/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))

    .pipe(gulp.dest('dist'))
})
/**
 * Image Compression
 * Run lossless compression on all the images
 */
gulp.task('image:min', () => {
  return gulp.src('dist/img/*')
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [
        { removeUnknownsAndDefaults: false },
        { cleanupIDs: false }
      ]
    }))

    .pipe(gulp.dest('dist/img'))
})
