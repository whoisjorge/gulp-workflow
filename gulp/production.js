import gulp from 'gulp'
import browserSync from 'browser-sync'
import sass from 'gulp-sass'
import moduleImporter from 'sass-module-importer'
import autoprefixer from 'gulp-autoprefixer'
import cssnano from 'gulp-cssnano'

// Compile SASS, minify CSS and autoprefix it
gulp.task('sass', () => {
  gulp.src('src/scss/**/*.scss')
    .pipe(sass({ importer: moduleImporter() }))
    .pipe(cssnano())
    .pipe(autoprefixer({
      browsers: ['last 2 versions', '> 1%'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/css'))
    // Enable browserSync
    .pipe(browserSync.stream())
})
