const path = require('path');
import { compileScripts, runHot } from 'webpack';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import {exec} from 'child_process';
const clean = require('gulp-clean');
const isProduction = (process.env.NODE_ENV === 'production');
const plugins = gulpLoadPlugins();
const workingPath = path.resolve(__dirname, 'front-end');
const destPath = path.resolve(__dirname, 'public');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');

console.log("working path: ", workingPath);
console.log("destPath path: ", destPath);

gulp.task('clean', (done) => {
    console.log(">> Task: clean");
    gulp
        .src([
            `${destPath}/css`,
        ], { allowEmpty: false })
        .pipe(clean())
        .pipe(plugins.clean());
    done();
});

gulp.task('scss', (done) => {
    console.log(">> Task: SCSS");
    gulp
        .src([`${workingPath}/scss/**/*.scss`], { allowEmpty: true })
        .pipe(plugins.sass())
        .pipe(autoprefixer({
            browsers: ["ie > 9", "last 6 iOS versions", "last 4 versions"],
            cascade: false
        }))
        .pipe(minify({}))
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
