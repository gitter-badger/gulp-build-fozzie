'use strict';var gulp=require('gulp'),del=require('del'),config=require('../config'),pathBuilder=require('../pathBuilder');gulp.task('clean:css',function(){return del(pathBuilder.cssDistDir+'/**/*')}),gulp.task('clean:scripts',function(){return del(pathBuilder.jsDistDir+'/**/*')}),gulp.task('clean:images',function(){return del(pathBuilder.imgDistDir+'/**/*')}),gulp.task('clean:docs',function(){return del([pathBuilder.docsDistDir+'/**/*'])});