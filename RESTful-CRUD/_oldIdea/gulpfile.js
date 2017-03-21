const gulp = require('gulp'),
    yargs = require('yargs').argv,
    browserSync = require('browser-sync').create(),
    config = require('./gulp.config')(),
    $ = require('gulp-load-plugins')({
        lazy: true
    })
server = $.jsonSrv.create(config.options.api);

gulp.task('default', ['job:start-watch']);

gulp.task('task:compile-html', () => {
    return gulp
        .src(config.html.source)
        .pipe(errorHandler())
        .pipe($.jade())
        .pipe(gulp.dest(config.html.build))
        .pipe(browserSync.stream());
});

gulp.task('task:compile-scripts', () => {
    return gulp
        .src(config.scripts.source)
        .pipe(errorHandler())
        .pipe($.sourcemaps.init())
        .pipe($.babel(config.options.babel))
        .pipe($.concat('all.js'))
        .pipe($.sourcemaps.write('./'))
        .pipe(gulp.dest(config.scripts.build))
        .pipe(browserSync.stream());
});

gulp.task('job:start-watch', ['task:compile-html', 'task:start-server'], () => {
    gulp.watch(config.html.source, ['task:compile-html']);
    gulp.watch(config.scripts.source, ['task:compile-scripts']);
    gulp.watch([config.html.build, config.scripts.build], ['task:page-reload']);
});

gulp.task('task:start-server', () => {
    browserSync.init(null, config.options.browser);
});

gulp.task('task:page-reload', () => {
    browserSync.reload();
});



///////////////////////////
// Functions
///////////////////////////
function errorHandler() {
    return $.plumber({
        errorHandler: function(err) {
            $.notify.onError({
                title: `Error : ${err.plugin}`,
                message: `Issue : ${err}`,
                sound: false
            })(err);

            console.log(`

/////////////////////////////////////
/////////////////////////////////////
Error: ${err.plugin}
Issue : ${err}
/////////////////////////////////////
/////////////////////////////////////

`);
            this.emit('end');
        }
    });
}
