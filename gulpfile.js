var gulp = require('gulp');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')({lazy:true});



gulp.task('sass', function(){
    return gulp
            .src('./src/sass/**/*.scss')
            .pipe($.sass().on('error',$.sass.logError))
            .pipe(gulp.dest('public/css'))
            .pipe(browserSync.reload({stream:true}))
})

gulp.task( 'html', function () {
	return gulp
		.src( './src/**/*.html' )
		.pipe( gulp.dest( 'public/' ) )
} );
gulp.task('browser-sync',['sass'],function(){
    browserSync({
        server:{
            baseDir:'./public',
            injectChanges:true
        }
    })
})
gulp.task('scripts',function(){
    return gulp
    .src(['./src/js/**/*.js'])
    .pipe($.plumber())
    .pipe($.babel())
    .pipe(gulp.dest('public/js'))
    .pipe(browserSync.reload({stream:true}));
})
gulp.task('watch', function(){
     gulp.watch('src/sass/**/*.scss',['sass',browserSync.reload]);
     gulp.watch('src/**/*.html',['html',browserSync.reload]);
     gulp.watch('public/*.html').on('change',browserSync.reload);
     gulp.watch('src/js/**/*.js',['scripts',browserSync.reload]);
     
})
gulp.task('default', function(){
    gulp.start(
        'sass',
        'html',
        'scripts',
        'browser-sync',
        'watch'
        
)})