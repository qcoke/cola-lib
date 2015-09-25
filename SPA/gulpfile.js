/**
 * Created by Roy on 15/9/25.
 */
"use strict";
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;
//定义GULP的轻量服务器
gulp.task('server',function(){
    browserSync({
        files: "**",
        server: {
            baseDir: "./"
        }
    });
});

//定义GULP的默认参数
gulp.task('default',['server']);