const gulp      = require('gulp');
const babili    = require('gulp-babili');
const babel     = require('gulp-babel');
const rollup    = require('gulp-rollup');
const builtins  = require('rollup-plugin-node-builtins');
const globals   = require('rollup-plugin-node-globals');
const eslint    = require('rollup-plugin-eslint');
const eslintrc  = require('./.eslintrc.json');
const rename    = require('gulp-rename');


gulp.task('build', () =>
    gulp.src('./src/index.js')    // transform the files here.
        .pipe(rollup({
            allowRealFiles: true,
            input: './src/index.js',
            format: 'iife',
            plugins: [
                globals(),
                builtins(),
                eslint(eslintrc)
            ],
        })).pipe(babel({
            presets: ['env']
        }))
        .pipe(babili({
            mangle: {
                keepClassName: true
            }
        }))
        .pipe(rename({
            basename: 'iscrolljs',
            extname: '.js'
        }))
        .pipe(gulp.dest('./dist')),
);
