import gulp from 'gulp'
import chalk from 'chalk'

import './serve'

gulp.task('start', () => {
  console.log(chalk.green('[✓] Gulp started successfully ') + chalk.red.bgCyan(' WORKING... '))
})

gulp.task('watch', () => {
  // do something
})
