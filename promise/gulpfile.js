"use strict";
// 变量定义
var gulp = require('gulp'),
    browserSync = require('browser-sync'); //文件自动同步

gulp.task('server', function() {
    var files = [
        '*.css',
        '*.js',
        '*.html'
    ];
    browserSync.init(files, {
        server: {
            baseDir: './'
        }
    });
});
gulp.task('default', ['server']);