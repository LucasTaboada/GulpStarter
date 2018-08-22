var gulp = require('gulp');
var broswerSync = require('browser-sync');
var sass = require('gulp-sass');



gulp.task('sass', function(){
    return gulp
            .src('./src/sass/**/*.scss')
            .pipe(sass().on('error',sass.logError))
            .pipe(gulp.dest('public/css'))
            .pipe(broswerSync.reload({stream:true}))
})

gulp.task( 'html', function () {
	return gulp
		.src( './src/**/*.html' )
		.pipe( gulp.dest( 'public/' ) )
} );
gulp.task('browser-sync',['sass'],function(){
    broswerSync({
        server:{
            baseDir:'./public',
            injectChanges:true
        }
    })
})

gulp.task('default', function(){
    gulp.start(
        'sass',
        'html',
        'browser-sync',
        
)})