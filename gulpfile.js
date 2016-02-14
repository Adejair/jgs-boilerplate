/*
* @ Gulp file, Task Mannager.
*/

const gulp = require('gulp')
  , stylus = require('gulp-stylus')
  , browserSync = require('browser-sync')
  , uglify = require('gulp-uglify')
  , imagemin = require('gulp-imagemin')
  , exec = require('child_process').exec;


/**
* @ Array with path of files html to watch
*/

const PATH_WATCH = ['./*.html', './_includes/*.html', './_layouts/*.html'];


/**
* @ Compile stylus file to css.
*/
gulp.task('stylus', () => {
  return gulp.src('./src/stylus/*.styl')
  .pipe(stylus())
  .pipe(gulp.dest('./css'))
});

/**
* @ Build files to _site
*/
gulp.task('jekyll-build', (cb) => {
  exec('jekyll build', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr)
    cb(err);
  });
});

/**
* @ Create local server with resources of sync.
*/
gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: './_site'
    }
  });
});

/**
* @ Minify files javascript
*/
gulp.task('minjs', () => {
  return gulp.src('./src/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./assets/js'))
});

/**
* @ Minify images .png
*/
gulp.task('minimage', () => {
  return gulp.src('./src/images/*.png')
  // TODO: by default imagemin render value is : 3
  .pipe(imagemin())
  .pipe(gulp.dest('./assets/images'))
});

/**
* @ Build Jekyll files and reload browser.
*/
gulp.task('jekyll-reload', ['jekyll-build'], () => browserSync.reload());

/**
* @ Watch Files and "compile" or reload.
* FIXME: All files is sync twice because delay, first time page is reloaded and
* reload is fired, now, .on('change') file is reloaded again to see changes.
*/
gulp.watch(PATH_WATCH, ['jekyll-reload']).on('change', browserSync.reload)
gulp.watch('./src/stylus/*.styl', ['stylus', 'jekyll-reload']).on('change', browserSync.reload);
gulp.watch('./src/js/*.js', ['minjs', 'jekyll-reload']).on('change', browserSync.reload);
gulp.watch('./src/images/*.png', ['minimage', 'jekyll-reload']).on('change', browserSync.reload);

gulp.task('default', ['stylus', 'minjs', 'minimage', 'jekyll-build', 'browser-sync']);
