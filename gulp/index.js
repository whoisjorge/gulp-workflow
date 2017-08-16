import gulp from 'gulp'
import chalk from 'chalk'

// Import each task
import './serve'
import './production'

gulp.task('start', ['serve'], () => {
  console.log(chalk.green('[✓] Gulp started successfully ') + chalk.red.bgCyan(' WORKING... '))
})

gulp.task('watch', () => {
  // do something
})
