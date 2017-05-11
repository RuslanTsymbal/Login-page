var gulp = require("gulp"),
    babelify = require('babelify'),
    browserify = require("browserify"),
    connect = require("gulp-connect"),
    source = require("vinyl-source-stream"),
    sourcemaps = require('gulp-sourcemaps'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano');


gulp.task("default", ["componentsHtml", "style", "script","img", "startServer"]);

gulp.task("componentsHtml", function () {
    return gulp.src("app/*/*/*.html")
        .pipe(gulp.dest("./dist/"))
});

gulp.task('style', function () {
    return gulp.src('assets/css/index.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/assets/css'))
});

gulp.task("script", function () {
    return browserify({
        entries: ["app/module.js"]
    })
        .transform(babelify.configure({
            presets: ["es2015"]
        }))
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("dist"));
});

gulp.task('img', function () {
    return gulp.src('assets/img/*.*')
        .pipe(gulp.dest('./dist/assets/img'));
});

gulp.task("startServer", function () {
    connect.server({
        root: "",
        livereload: true,
        port: 9001
    });
});

gulp.task('watch', function () {
    gulp.watch('startServer');
    gulp.watch(['app/*.js'], ['script']);
    gulp.watch(['app/components/*/*.js'], ['script']);
    gulp.watch(['app/shared/*/*.js'], ['script']);
    gulp.watch('app/components/*/*.html', ['componentsHtml']);
    gulp.watch('app/shared/*/*.html', ['componentsHtml']);
    gulp.watch('assets/css/*.less', ['style']);
  });