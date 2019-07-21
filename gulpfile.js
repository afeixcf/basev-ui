'use strict'

const { series, src, dest } = require('gulp')
const less = require('gulp-less')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')

function compile() {
  return src('./src/theme/*.less')
    .pipe(less())
    .pipe(
      autoprefixer({
        browsers: ['ie > 9', 'last 2 versions'],
        cascade: false
      })
    )
    .pipe(cssmin())
    .pipe(dest('./lib/theme'))
}

// function copyfont() {
//   return src('./src/fonts/**')
//     .pipe(cssmin())
//     .pipe(dest('./lib/fonts'))
// }

exports.build = series(compile)
