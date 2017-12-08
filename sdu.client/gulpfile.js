const gulp = require('gulp');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

var devMode = false;

gulp.task('img',function () {
    gulp.src("./public/stylesheets/img/*.jpg")
        .pipe(gulp.dest("build/front/sdu/css/img"))
});
gulp.task('img2',function () {
    gulp.src("./public/stylesheets/img/*.png")
        .pipe(gulp.dest("build/front/sdu/css/img"))
});

// gulp.task('js2',function(){
//     gulp.src("./public/javascripts/java/*.js")
//         .pipe(gulp.dest("build/front/sdu/js/js2"))
// });
gulp.task('css2',function(){
    gulp.src("./public/stylesheets/*.css")
        .pipe(gulp.dest("build/front/sdu/css/css2"))
});

gulp.task('css', function() {
    gulp.src("./public/stylesheets/main.css")
        .pipe(concat('main.css'))
        .pipe(gulp.dest('build/front/sdu/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('material', function () {
    return gulp.src("./node_modules/angular-material/**/*")
        .pipe(gulp.dest('build/front/sdu/css/angular-material/'));
});
gulp.task('jquery', function () {
    gulp.src(["./java/*.js"])
        .pipe(gulp.dest('build/front/sdu/js/jquery'));

});


gulp.task('angular', function() {
    gulp.src([
        "./node_modules/angular/angular.js",
        "./node_modules/angular-ui-router/release/angular-ui-router.js",
        "./node_modules/angular-animate/angular-animate.js",
        "./node_modules/angular-aria/angular-aria.js",
        "./node_modules/angular-material/angular-material.js",
        "./node_modules/angular-messages/angular-messages.js",
        "./node_modules/angular-sanitize/angular-sanitize.js",
        "./public/javascripts/vendors/mask.js",
        "./node_modules/ngstorage/ngStorage.js"

    ])
        .pipe(concat('angular.js'))
        .pipe(gulp.dest('build/front/sdu/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('app', function() {
    gulp.src("./public/javascripts/app.js")
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build/front/sdu/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('controllers', function() {
    gulp.src("./public/javascripts/controllers/MainController.js")
        .pipe(concat('controllers.js'))
        .pipe(gulp.dest('build/front/sdu/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('html', function() {
    return gulp.src('./public/templates/**/*.html')
        .pipe(gulp.dest('build/front/sdu/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('build', function() {
    gulp.start(['angular','jquery','controllers','app','css','material','html', 'img','css2','img2'])
});

gulp.task('browser-sync', function() {
    browserSync.init(null, {
        open: false,
        server: {
            baseDir: 'build/front/sdu',
        }
    });
});

gulp.task('start', function() {
    devMode = true;
    gulp.start(['build', 'browser-sync']);
    gulp.watch(['./public/stylesheets/main.css'], ['css']);
    gulp.watch(['./public/javascripts/controllers/*.js'], ['controllers']);
    gulp.watch(['./public/javascripts/*.js'], ['app']);
    gulp.watch(['./public/templates/views/*.html'], ['html']);
    gulp.watch(['./public/templates/*.html'], ['html']);
    gulp.watch(['./public/javascripts/java/*.js'],['js2']);
    gulp.watch(['./public/stylesheets/*.css'], ['css']);
});

