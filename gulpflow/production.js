import gulp from 'gulp'
import browserSync from 'browser-sync'
import sass from 'gulp-sass'
import moduleImporter from 'sass-module-importer'
import autoprefixer from 'gulp-autoprefixer'
import cssnano from 'gulp-cssnano'
import uglify from 'gulp-uglify'
import pump from 'pump'
import htmlmin from 'gulp-htmlmin'
import imagemin from 'gulp-imagemin'

// > COMPILATION
// >
// - Compile SASS, minify CSS and autoprefix it
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

// JavaScript minification
gulp.task('js:min', (cb) => {
  pump([
    gulp.src('src/js/*.js'),
    uglify(),
    gulp.dest('dist/js')
  ], cb)
})

// 
// 
// HTML minification
gulp.task('html:min', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'))
})

//
//
//
// Image Compression
// Run lossless compression on all the images
gulp.task('image:min', () => {
  return gulp.src('src/img/*')
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{ removeUnknownsAndDefaults: false }, { cleanupIDs: false }]
    }))
    .pipe(gulp.dest('dist/img'))
})
