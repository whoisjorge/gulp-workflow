import gulp from 'gulp'
import browserSync from 'browser-sync'

const runServer = browserSync.create()

// https://browsersync.io/docs/options
gulp.task('serve', () => {
  runServer.init({
    browser: ['google chrome'],
    server: './dist'
  })
  gulp.watch('src/js/*.js', ['compressjs'])
  gulp.watch('src/scss/**/*.scss', ['sass'])
  gulp.watch('dist/*.html').on('change', browserSync.reload)
  gulp.watch('src/*.html', ['htmlmin'])
})
