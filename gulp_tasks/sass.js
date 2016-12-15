var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', init);

gulp.task('sass:watch', watch);

function init(){
	 return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
}

function watch(){
  gulp.watch('./sass/**/*.scss', ['sass']);
}