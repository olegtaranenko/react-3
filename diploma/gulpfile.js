const   gulp         = require('gulp'),
        browserSync  = require('browser-sync').create(),
        sass         = require('gulp-sass'),
        concatCss    = require('gulp-concat-css'),
        postcss      = require('gulp-postcss'),
        autoprefixer = require('autoprefixer'),
        concat       = require('gulp-concat'),
        uglify       = require('gulp-uglify'),
        cleanCSS     = require('gulp-clean-css'),
        webpack      = require('webpack-stream');


gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./src"
    });

    gulp.watch("src/sass/**/*.sass", ['sass']);
    gulp.watch("src/js/**/*.js", ['webpack']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});


gulp.task('sass', ['webpack'], function() {
    return gulp.src("src/sass/**/*.sass")
        .pipe(sass())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(concatCss("style.css"))
        .pipe(cleanCSS())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});
gulp.task('webpack', function() {
    return gulp.src('src/js/index.js')
        .pipe(webpack({
            mode: 'development',
            output: {
                filename: 'script.js'
              },
              watch: false,
            
              devtool: "source-map",
            
              module: {
                rules: [
                  {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                      loader: 'babel-loader?optional[]=runtime',
                      options: {
                        presets: [
                          ["@babel/env", {
                            targets: {
                              edge: "17",
                              firefox: "60",
                              chrome: "67",
                              safari: "11.1",
                              ie: "11"
                            },
                            useBuiltIns: "usage"
                          }]
                        ]
                      }
                    }
                  }
                ]
              }
        }))
        .pipe(gulp.dest('src/js/'))
        .pipe(browserSync.stream());
});

gulp.task('compileCss', function() {
    return gulp.src('src/css/*.css')
      .pipe(concat('style.css'))
      .pipe(gulp.dest('src/css/'));
});
gulp.task('compileJs', function() {
    return gulp.src('src/js/*.js')
      .pipe(concat('script.js'))
      .pipe(uglify())
      .pipe(gulp.dest('src/js/'));
});

gulp.task('default', ['serve']);