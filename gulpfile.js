import path from 'path'
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import {exec} from 'child_process';
import browserSync from 'browser-sync';
const clean = require('gulp-clean');
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import { webpackConfig, server } from './front-end/tasks/webpack.js'

const isProduction = (process.env.NODE_ENV === 'production');

const plugins = gulpLoadPlugins();

const loc = 'node_modules/';
const reload = browserSync.reload;

const workingPath = path.resolve(__dirname, 'front-end');
const destPath = path.resolve(__dirname, 'public');

console.log("working path: ", workingPath);
console.log("destPath path: ", destPath);

gulp.task('clean', (done) => {
    console.log(">> Task: clean");
    gulp
        .src([
            `${destPath}/js`,
            `${destPath}/css`,
        ], { allowEmpty: true })
        .pipe(plugins.clean());
    done();
});

gulp.task('scss', (done) => {
    console.log(">> Task: SCSS");
    gulp
        .src([`${workingPath}/scss/**/*.scss`], { allowEmpty: true })
        .pipe(plugins.sass())
        .pipe(gulp.dest(`${destPath}/css`))
        .pipe(browserSync.stream());
    done();
});

gulp.task('watch', (done) => {
    console.log(">> Task: Watch");
    gulp.watch(`${workingPath}/scss/**/*.scss`, gulp.series('scss'));
    done();
});

gulp.task('dev', (done) => {
    console.log(">> Task: Dev");
    gulp.series('scss', 'watch')();
    done();
});

gulp.task('scripts', (done) => {
    console.log(">> Task: Scripts");
    gulp
        .src([
            `${workingPath}/js/**/*.js`,
            `${workingPath}/components/**/*.jsx`
        ], { allowEmpty: true })
        .pipe(webpackStream(webpackConfig, webpack))
        .pipe(gulp.dest(`${destPath}`))
        .pipe(browserSync.stream());
    done();
});

gulp.task('dev', gulp.series(
    'clean',
    'scss',
    'scripts',
    server,
    'watch',
    () => {
        // browserSync.init(null, {
        //     proxy: "localhost:5000",
        //     port: 8080,
        //     reloadDelay: 1000,
        //     reloadDebounce: 2000,
        //     reloadOnRestart: true,
        //     open: false
        // });
    }
));
