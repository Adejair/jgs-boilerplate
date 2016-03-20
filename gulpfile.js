/**


*/

'use strict';

const gulp = require('gulp')
	, stylus = require('gulp-stylus')
	, browserSync = require('browser-sync')
	, imagemin = require('gulp-imagemin')
	, exec = require('child_process').exec;


const PATH_WATCH = ['*.html', '_layouts/*.html', '_includes/*.html'];

gulp.task('stylus', () => {
	return gulp.src('_stylus/**.styl')
	.pipe(stylus())
	.pipe(gulp.dest('./_site/css'))
	.pipe(gulp.dest('./css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('imagemin', () => {
	return gulp.src('images/*')
	.pipe(imagemin({progressive : true}))
});

gulp.task('browser-sync', () => {
	browserSync.init({
		server : {
			baseDir: './_site'
		}
	});

	gulp.watch(PATH_WATCH, ['rebuild-jekyll']);
	gulp.watch('_stylus/*.styl', ['stylus']);
});

gulp.task('rebuild-jekyll', ['build-jekyll'], () => {
	browserSync.reload();
});

gulp.task('build-jekyll', (cb) => {
	exec('jekyll build', (err, stdout, stderr) => {
		console.log(stdout);
    	console.log(stderr);
    	cb(err);
	});
});

gulp.task('default', ['stylus', 'imagemin', 'build-jekyll', 'browser-sync']);