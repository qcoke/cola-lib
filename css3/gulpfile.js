var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// static server
gulp.task('browser-sync',function(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    // 监控 CSS,HTML 文件
    gulp.watch('./**/*.html').on('change',browserSync.reload);
});

gulp.task('default',['browser-sync']);