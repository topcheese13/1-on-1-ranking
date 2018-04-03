import path from 'path'
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
            `${destPath}/js`,
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

gulp.task('dev', (done) => {
    console.log(">> Task: Dev");
    gulp.series('scss', 'watch')();
    done();
});

gulp.task('scripts', (done) => {
    console.log(">> Task: Scripts");
    if (isProduction) {
        gulp.series(compileScripts);
    } else {
        gulp.parallel(runHot, compileScripts);
    }
    done();
});

gulp.task('watch', (done) => {
    console.log(">> Task: Watch");
    gulp.watch(`${workingPath}/scss/**/*.scss`, gulp.series('scss'));
    gulp.watch([
            `${workingPath}/js/**/*.js`,
            `${workingPath}/js/**/*.jsx`
        ],
        gulp.series('scripts')
    );
    done();
});

gulp.task('dev', gulp.series(
    'clean',
    'scss',
    'scripts',
    'watch'
));

export default gulp.task('dev');