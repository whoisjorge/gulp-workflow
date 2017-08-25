import gulp from 'gulp'
import chalk from 'chalk'

import './serve'
import './development'
import './production'

// Run development task
gulp.task('development', ['serve'], () => {
  console.log(chalk.green('\n[✓] Development mode started succesfully ') + chalk.magenta.bgWhite('\n- WATCHING FOR CHANGES ... \n'))
})

// Run production task
gulp.task('production', ['build'], () => {
  console.log(chalk.green('\n[✓] Built succesfully '))
})
