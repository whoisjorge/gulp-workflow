/* ____           _            _ 
  / ___|  _   _  | |  _ __    | |
 | |  _  | | | | | | | '_ \   | |
 | |_| | | |_| | | | | |_) |  |_|
  \____|  \__,_| |_| | .__/   (_)
  *                  |_|                       
  *                    
  * Rather than manage one giant configuration file for
  * multiple tasks, each task has been broken out into
  * its own space inside the './gulp' folder
  *
*/
import gulp from 'gulp'
import './gulp'

// Default task - start local server & watch for changes
gulp.task('default', ['start'])
