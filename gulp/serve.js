import gulp from 'gulp'
import browserSync from 'browser-sync'
const runBSync = browserSync.create()

// https://browsersync.io/docs/options
gulp.task('serve', ['sass', 'js:min', 'html'], function () {
  runBSync.init({
    browser: ['google chrome'],
    server: './dist'
  })
  gulp.watch('./src/scss/**/*.scss', ['sass'])
  gulp.watch('./src/js/*.js', ['js:min'])
  gulp.watch('./dist/*.html').on('change', browserSync.reload)
  gulp.watch('./src/*.html', ['html'])
})
