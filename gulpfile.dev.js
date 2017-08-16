const gulp              = require('gulp'),
sass              = require('gulp-sass'),
autoprefixer      = require('gulp-autoprefixer'),
cssnano           = require('gulp-cssnano'),
uglify            = require('gulp-uglify'),
pump              = require('pump'),
htmlmin           = require('gulp-htmlmin'),
imagemin          = require('gulp-imagemin'),
browserSync       = require('browser-sync').create();

/*************************************************/

gulp.task('default', ['serve']);

////////////
// Static Server + watching scss/js/html files
gulp.task('serve', ['sass', 'compressjs', 'htmlmin'], function() {

browserSync.init({
  server: "./dist" // Serve /dist/ folder
});

gulp.watch("src/js/*.js", ['compressjs']);
gulp.watch("src/scss/**/*.scss", ['sass']);
gulp.watch("dist/*.html").on('change', browserSync.reload);
gulp.watch("src/*.html", ['htmlmin']);

});


//// 
// ### SASS
gulp.task ('sass', function(){

// Compile
return gulp.src('src/scss/**/*.scss') // From
  .pipe(sass()) // Compile SASS
  .pipe(cssnano()) // Minify CSS
  // Prefix CSS
  .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
  }))
  .pipe(gulp.dest('dist/css')) // To

  // Enable browserSync
  .pipe(browserSync.stream());

});

////
// ### Compress JavaScript
gulp.task('compressjs', function (cb) {
pump([
      gulp.src('src/js/*.js'),
      uglify(),
      gulp.dest('dist/js')
  ],
  cb
);
});

////
// ### Compress HTML
gulp.task('htmlmin', function() {
return gulp.src('src/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('dist'));
});





//// 
// ### Compress Images
// `gulp images` - Run lossless compression on all the images.
gulp.task('images', function() {
return gulp.src('src/img/*')
  .pipe(imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{removeUnknownsAndDefaults: false}, {cleanupIDs: false}]
  }))
  .pipe(gulp.dest('dist/img'))
});
/*************************************************************************************
*************************************************************************************/