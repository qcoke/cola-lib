var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var connect = require('gulp-connect');

gulp.task('build', function() {
	console.log("开始开始编译");
	return gulp.src('app/**/*.js')
		.pipe(babel({
			presets: ['react']
		}))
		.pipe(browserify())
		.pipe(rename('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./'))
});

gulp.task('watch', function() {
	gulp.watch([
		'app/**/*.js'
	], function() {
		gulp.run('build');
	});
});

gulp.task('server', function() {
	connect.server({
		root: './',
		host: '192.168.199.145',
		port: 8080,
		livereload: true
	});
});