const { src, dest } = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const svgSprite = require('gulp-svg-sprite');
const svgcheerio = require('gulp-cheerio');
const svgmin = require('gulp-svgmin');
const replace = require('gulp-replace');

// Обработка JavaScript
const svgsprite = () => {
  return src(path.svgsprite.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: 'JavaScript',
        message: error.message
      }))
    }))
    .pipe(svgmin({
      js2svg: {
        pretty: true,
      }
    }))
    .pipe(svgcheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },
      parserOptions: { xmlMode: true },
    }))
    .pipe(replace('&gt;', '>'))
    .pipe(svgSprite({
      mode: {
        //? Если нужно использовать спрайт через тег img,
        //? можно использовать спрайт для background
        // stack: {
        //   sprite: 'sprite.svg',
        //   example: true
        // },
        //?? Если нужно использовать спрайт через тег svg > use
        symbol: {
          sprite: 'sprite.svg'
        }
      }
    }))
    .pipe(dest(path.svgsprite.dest));
}

module.exports = svgsprite;