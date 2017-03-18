"use strict";
// 变量定义
var gulp = require('gulp'),
	browserSync = require('browser-sync');

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: './',
            index: '1.html'
        }
    });
});

gulp.task('default', ['browser-sync']);