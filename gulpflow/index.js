import gulp from 'gulp'
import chalk from 'chalk'

import './serve'
import './development'

// Run development server
gulp.task('start', ['serve'], () => {
  console.log(chalk.green('\n[✓] Gulpflow successfully started ') + chalk.red.bgCyan('\n SERVING FILES... \n'))
})

//
gulp.task('production', ['build'], () => {
  // prepare build dist files
})
