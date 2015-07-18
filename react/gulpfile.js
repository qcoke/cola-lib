var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint');
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    minifyCss = require('gulp-minify-css'),
    //javascript脚本变量混淆
    uglyfly = require('gulp-uglyfly'),

    reload = browserSync.reload;

//定义SASS编译任务
gulp.task('sass', function () {
    gulp.src('resources/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        //添加 CSS3 私有属性样式表前缀
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minifyCss())
        //放入CSS文件夹
        .pipe(gulp.dest('resources/css'));
});
//定义javascript语法检查任务
gulp.task('jshint', function() {
    return gulp.src(['app/**/*.js','*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('YOUR_REPORTER_HERE'));
});

//定义图片压缩任务
gulp.task('image-min', function () {
    return gulp.src('resources/imgs/*.png')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('resources/imgs'));
});

//定义GULP的轻量服务器
gulp.task('server',function(){
	browserSync.init({server:'./'});
	gulp.watch('resources/sass/**/*.scss',['sass']);
    gulp.watch('resources/css/**/*.css').on('change',reload);
	gulp.watch('app/**/*.js',['jshint']).on('change',reload);
	gulp.watch('*.html').on('change',reload);
});

//定义GULP的默认参数
gulp.task('default',['server']);