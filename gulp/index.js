import gulp from 'gulp'
import chalk from 'chalk'

import './serve'
import './development'

gulp.task('start', ['serve'], () => {
  console.log(chalk.green('[✓] Gulp ended `start` successfully ') + chalk.red.bgCyan(' SERVING FILES... '))
})

//
//
//
gulp.task('production', ['build'], () => {
  // do something
})
