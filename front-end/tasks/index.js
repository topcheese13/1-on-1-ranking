import path    from 'path'
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
const autoprefixer = require('gulp-autoprefixer');
import { scripts } from './webpack'
import { server }  from './server'
const sass = require('gulp-sass');
const clean = require('gulp-clean');
const sourcemaps = require('gulp-sourcemaps');
const isProduction = (process.env.NODE_ENV === 'production');
import {exec} from 'child_process';
import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';

const plugins = gulpLoadPlugins();
const reload = browserSync.reload;

const workingPath = './front-end/';
const destPath = './public/';

/* The Sass data is concatenated and minified then outputed. */
export const scss = () => gulp
    .src(`${workingPath}/scss/**/*.scss`)
    .pipe(plugins.sass())
    .pipe(gulp.dest(`${destPath}/css`))
    .pipe(browserSync.stream());

// Clean JS
export const clean_scripts = () => gulp
    .src(`${destPath}/js`, {read: false})
    .pipe(clean());

// Clean CSS
export const clean_css = () => gulp
    .src(`${destPath}/css`, {read: false})
    .pipe(clean());


// Clean All
export const clean_all = () => gulp
    .parallel(clean_scripts, clean_css);


// // Scripts
// export const scripts = () => gulp
//     .src([
//         `${workingPath}/js/**/*.js`,
//         `${workingPath}/js/**/*.jsx`
//     ])
//     .pipe(webpackStream(webpackConfig, webpack))
//     .pipe(plugins.concat('scripts.min.js'))
//     .pipe(gulp.dest(`${destPath}/js`))
//     .pipe(browserSync.stream());


// Watcher
export const watch = done => {
    /* Trigger a SCSS injection (no reload) on a scss file change */
    gulp.series(scss);
    gulp.watch(`${workingPath}/scss/**/*.scss`, gulp.parallel(scss));

    /* Trigger a reaload on a js file change */
    let scriptsWatcher = gulp.watch(`${workingPath}/js/**/*.js`, gulp.parallel(scripts));
    scriptsWatcher.on('change', (event, path, stats) => {
        reload();
    });
    done();
};

/* Main development server command
 * Runs other gulp tasks to minify CSS and JS files.
 * Runs the Watch task.
 * BrowserSync loads hot-reload. */
gulp.task('dev_tasks', gulp.series(
    clean_all,
    gulp.parallel(scss, server, watch),
    () => {
        browserSync.init(null, {
            proxy: "localhost:5000",
            port: 8080,
            reloadDelay: 1000,
            reloadDebounce: 2000,
            reloadOnRestart: true,
            open: false
        });
    }
));


export const dev   = gulp.series('dev_tasks', scss, server);
// export const build = gulp.series(clean_all, scss, scripts);








// gulp.task('images', function () {
//     return gulp.src('design/images/**/*')
//         .pipe($.cache($.imagemin({
//             optimizationLevel: 3,
//             progressive: true,
//             interlaced: true
//         })))
//         .pipe(gulp.dest('design/images'))
//         .pipe($.size({showFiles: true}));
// });





// Export
export default dev









