import gulp from 'gulp'
/* ____           _            _
  / ___|  _   _  | |  _ __    | |
 | |  _  | | | | | | | '_ \   | |
 | |_| | | |_| | | | | |_) |  |_|
  \____|  \__,_| |_| | .__/   (_)
  *                  |_|
  *
  * Rather than manage one giant configuration file for
  * multiple tasks, each task has been broken out into
  * its own space inside the './gulpflow' folder
  *
*/

// Import yourVeryOwn workflow :)
import './gulpflow'

// Default task - start local server & watch for changes
gulp.task('default', ['start'])
