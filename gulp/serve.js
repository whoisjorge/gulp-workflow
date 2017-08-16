import gulp from 'gulp'
import browserSync from 'browser-sync'

const server = browserSync.create()

gulp.task('serve', () => {
  server.init({
    server: './dist'
  })
  gulp.watch('src/js/*.js', ['compressjs'])
  gulp.watch('src/scss/**/*.scss', ['sass'])
  gulp.watch('dist/*.html').on('change', browserSync.reload)
  gulp.watch('src/*.html', ['htmlmin'])
})
