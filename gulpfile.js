const path = require('path');
import { compileScripts, runHot } from 'webpack';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import {exec} from 'child_process';
const clean = require('gulp-clean');
const livereload = require("gulp-livereload");

const isProduction = (process.env.NODE_ENV === 'production');
const plugins = gulpLoadPlugins();
const workingPath = path.resolve(__dirname, 'front-end');
const destPath = path.resolve(__dirname, 'public');

console.log("working path: ", workingPath);
console.log("destPath path: ", destPath);

gulp.task('clean', (done) => {
    console.log(">> Task: clean");
    gulp
        .src([
            `${destPath}/css`,
        ], { allowEmpty: true })
        .pipe(clean())
        .pipe(plugins.clean());
    done();
});

gulp.task('scss', (done) => {
    console.log(">> Task: SCSS");
    gulp
        .src([`${workingPath}/scss/**/*.scss`], { allowEmpty: true })
        .pipe(plugins.sass())
        .pipe(gulp.dest(`${destPath}/css`));
    done();
});

gulp.task('watch', (done) => {
    console.log(">> Task: Watch");
    gulp.watch(`${workingPath}/scss/**/*.scss`, ['scss']);
    done();
});

gulp.task('dev', [
    'clean',
    'scss',
    'watch'
]);

gulp.task('default', ['dev']);
