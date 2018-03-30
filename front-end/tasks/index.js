import path    from 'path'
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
import { scripts } from './webpack'
import { server }  from './server'
const sass = require('gulp-sass');
const clean = require('gulp-clean');
const sourcemaps = require('gulp-sourcemaps');
const isProduction = (process.env.NODE_ENV === 'production');

// Clean

gulp.task('clean-scripts', function () {
    return gulp.src('../../public/js', {read: false})
        .pipe(clean());
});

gulp.task('clean-styles', function () {
    return gulp.src('../../public/css', {read: false})
        .pipe(clean());
});

gulp.task('clean', gulp.series('clean-scripts', 'clean-styles'));

// Watch
gulp.task('watch', gulp.watch('scss/**/*.scss',
    gulp.parallel('styles'))
);


// SCSS
// gulp.task('styles', function () {
//     return gulp.src('../scss/*.scss')
//         .pipe($.plumber())
//         .pipe(sass().on('error', sass.logError))
//         .pipe($.sass({
//             errLogToConsole: true
//         }))
//         .pipe($.autoprefixer({
//             "browsers": ["ie > 10", "last 6 iOS versions", "last 4 versions"]
//         }))
//         .pipe(sourcemaps.write('./maps'))
//         .pipe(gulp.dest('../../public/css/'))
//         .pipe($.size({showFiles: true}));
// });

// JS
export const dev   = gulp.series('clean', 'styles', server);
export const build = gulp.series('clean', 'styles', scripts );








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









