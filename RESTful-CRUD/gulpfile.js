const gulp = require('gulp'),
    yargs = require('yargs').argv;
    browserSync = require('browser-sync').create(),
    jsonServer = require('gulp-json-srv'),
    config = require('./gulp.config')(),
    $ = require('gulp-load-plugins')({lazy: true})
    server = $.jsonSrv.create(config.options.api);

gulp.task('default', ['start-watch']);

gulp.task("start-db", () => {
    return gulp
        .src("db.json")
        .pipe(server.pipe());
});

gulp.task('task:compile-html', () => {
    console.log(`

        ${config.html.source}
        ---------------------
        ${config.html.build}

    `)
    return gulp
        .src(config.html.source)
        .pipe($.jade())
        .pipe(gulp.dest(config.html.build))
})

gulp.task('start-watch', ['start-db', 'start-server'], () => {
    gulp.watch(config.html.source, ['task:compile-html', 'page-reload']);
    // gulp.watch(config.html.styles, ['compile-styles', 'page-reload']);
    gulp.watch(['db.json'], ['start-db']);
});

gulp.task('start-server', () => {
    browserSync.init(null, config.options.browser);
});

gulp.task('page-reload', () => {
    browserSync.reload();
});
