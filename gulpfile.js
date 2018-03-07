var gulp= require('gulp');
var less= require('gulp-less');
var sass= require('gulp-sass');


gulp.task('less',function(){
	gulp.src('lessstyles.less')
	.pipe(less())
	.pipe(gulp.dest(''));
});

gulp.task('scss',function(){
	gulp.src('scssstyles.scss')
	.pipe(sass())
	.pipe(gulp.dest(''));
});


gulp.task('lesswatch', function(){
gulp.watch('lessstyles.less', ['less']);
});

gulp.task('sasswatch', function(){
gulp.watch('scssstyles.scss', ['scss']);
});