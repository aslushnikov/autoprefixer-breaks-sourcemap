'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('./*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
                    browsers: ['last 2 versions']
        }))
        .pipe(sourcemaps.write('.', {includeContent: false}))
        .pipe(gulp.dest('./'));
});

