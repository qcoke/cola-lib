/**
 * Created by Roy on 15/9/25.
 */
"use strict";
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;
//对JAVASCRIPT进行语法验证
gulp.task('jslint', function() {
    return gulp.src('./lib/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('YOUR_REPORTER_HERE'));
});
//定义GULP的轻量服务器
gulp.task('server',function(){
    var files = [
        "css/*.css",
        "js/*.js",
        "*.html"
    ];
    browserSync({
        files: files,
        server: {
            baseDir: "./"
        }
    });
    //监控JS文件，每当文件发生变化的时候，就调用jslint进行语法验证
    gulp.watch('js/*.js',['jslint']);
});
//定义GULP的默认参数
gulp.task('default',['server']);