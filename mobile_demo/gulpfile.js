"use strict";
// 变量定义
var gulp = require('gulp'),
    browserSync = require('browser-sync');          //文件自动同步

// 服务器
gulp.task('server',function () {
    var files = [
        "*.html"
    ];
    browserSync.init(files, {
        server: './'
    });
    //监控SASS文件的变化
   // gulp.watch('sass/*.scss', ['sass']);
});

//测试服务器
gulp.task('default', ['server']);