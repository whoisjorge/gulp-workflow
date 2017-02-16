var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
    var pump = require('pump');
var htmlmin = require('gulp-htmlmin');

var imagemin     = require('gulp-imagemin');

var browserSync = require('browser-sync').create();
/*************************************************/

gulp.task('default', ['serve']);

 ////////////
// Static Server + watching scss/js/html files
gulp.task('serve', ['sass', 'compressjs', 'htmlmin'], function() {

    browserSync.init({
        server: "./dist" // Serve /dist/ folder
    });

    gulp.watch("app/js/*.js", ['compressjs']);
    gulp.watch("app/scss/**/*.scss", ['sass']);
    gulp.watch("dist/*.html").on('change', browserSync.reload);
    gulp.watch("app/*.html", ['htmlmin']);

});


 //// 
// ### SASS
gulp.task ('sass', function(){

    // Compile
    return gulp.src('app/scss/**/*.scss') // From
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
            gulp.src('app/js/*.js'),
            uglify(),
            gulp.dest('dist/js')
        ],
        cb
    );
});

 ////
// ### Compress HTML
gulp.task('htmlmin', function() {
    return gulp.src('app/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});





  //// 
 // ### Compress Images
// `gulp images` - Run lossless compression on all the images.
gulp.task('images', function() {
    return gulp.src('app/img/*')
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            svgoPlugins: [{removeUnknownsAndDefaults: false}, {cleanupIDs: false}]
        }))
        .pipe(gulp.dest('dist/img'))
});
/*************************************************************************************
 *************************************************************************************/