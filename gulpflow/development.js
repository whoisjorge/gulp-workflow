import gulp from 'gulp'
import chalk from 'chalk'
import browserSync from 'browser-sync'
import sass from 'gulp-sass'
import moduleImporter from 'sass-module-importer'
import autoprefixer from 'gulp-autoprefixer'
import concat from 'gulp-concat'
import cssnano from 'gulp-cssnano'
import strip from 'gulp-strip-comments'
import pump from 'pump'

/*
  * DEVELOPMENT TASK
  *  It just builds every asset into ./dist folder
  *   Note: only vendor assets are production-ready!
*/
gulp.task('generate', ['sass', 'css:vendor', 'js', 'js:vendor', 'html', 'images', 'fonts'], () => {
  console.log(chalk.cyan.bgBlack('\n < WEBSITE GENERATED > \n'))
})

/* ___   _   ___ ___
  / __| /_\ / __/ __|
  \__ \/ _ \\__ \__ \
  |___/_/ \_\___/___/
*/
gulp.task('sass', function () {
  gulp.src('./src/scss/**/*.scss')

    // Import CSS dependencies required in
    // your main.css file. NOT vendor!
    .pipe(sass({ importer: moduleImporter() }))

    // Autoprefix
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))

    // Destination
    .pipe(gulp.dest('./dist/css/'))

    // Enable browserSync
    .pipe(browserSync.stream())
})

//

// Vendor CSS files
gulp.task('css:vendor', () => {
  gulp.src([
    // './node_modules/normalize.css/normalize.css',
    './node_modules/animate.css/animate.css'
  ])

    // Concatenate
    .pipe(concat('vendor.css'))

    // Minify and remove comments
    .pipe(cssnano({
      discardComments: {removeAll: true}
    }))

    // Destination:
    .pipe(gulp.dest('./dist/css/'))
})

/*   _               ___         _      _
  _ | |__ ___ ____ _/ __| __ _ _(_)_ __| |_
 | || / _` \ V / _` \__ \/ _| '_| | '_ \  _|
  \__/\__,_|\_/\__,_|___/\__|_| |_| .__/\__|
                                  |_|
*/
gulp.task('js', function (cb) {
  pump([
    gulp.src('./src/js/*.js'),
    // TODO: npm install --save-dev gulp-babel
    gulp.dest('./dist/js/')
  ], cb)
})

//

// Vendor JavaScript files
gulp.task('js:vendor', () => {
  gulp.src([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/vue/dist/vue.min.js'
  ])

    // Concatenate
    .pipe(concat('vendor.js'))

    // Remove comments
    .pipe(strip())

    // Destination:
    .pipe(gulp.dest('./dist/js/'))
})

//

/* _  _ _____ __  __ _
  | || |_   _|  \/  | |
  | __ | | | | |\/| | |__
  |_||_| |_| |_|  |_|____|
*/
gulp.task('html', () => {
  return gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist'))
})

//

/* ___ __  __   _   ___ ___ ___
  |_ _|  \/  | /_\ / __| __/ __|
   | || |\/| |/ _ \ (_ | _|\__ \
  |___|_|  |_/_/ \_\___|___|___/
*/
gulp.task('images', () => {
  gulp.src('./src/img/*.{png,svg}')
    .pipe(gulp.dest('./dist/img/'))
})

//

/* ___ ___  _  _ _____ ___
  | __/ _ \| \| |_   _/ __|
  | _| (_) | .` | | | \__ \
  |_| \___/|_|\_| |_| |___/
*/
gulp.task('fonts', () => {
  gulp.src('./src/fonts/*.*')
    .pipe(gulp.dest('./dist/fonts'))
})
