'use strict';var gulp=require('gulp'),browserSync=require('browser-sync'),config=require('../config'),pathBuilder=require('../pathBuilder');gulp.task('browserSync:docs',['assemble'],function(){browserSync.init({files:[pathBuilder.docsDistDir+'/**/*.html',pathBuilder.docsDistDir+'/assets/**/*.css',pathBuilder.docsDistDir+'/assets/**/*.js'],server:{baseDir:pathBuilder.docsDistDir,serveStaticOptions:{extensions:['html']}},reloadDebounce:1e3})});