import gulp from 'gulp'
import browserSync from 'browser-sync'

// Get a unique reference
browserSync.create()

// Start the server
// https://browsersync.io/docs/options
gulp.task('serve', ['sass', 'js', 'html'], () => {
  browserSync.init({
    browser: ['google chrome'],
    server: './dist'
  })
  // Watch files
  gulp.watch('./src/scss/**/*.scss', ['sass'])
  gulp.watch('./src/js/*.js', ['js:min'])
  gulp.watch('./dist/*.html').on('change', browserSync.reload)
  gulp.watch('./src/*.html', ['html'])
})
