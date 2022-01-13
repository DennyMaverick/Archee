const { src, dest } = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const newer = require('gulp-newer');
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const gulpIf = require("gulp-if");


// Обработка изображений
const img = () => {
  return src(path.img.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: 'Image',
        message: error.message
      }))
    }))
    .pipe(newer(path.img.dest))
    .pipe(webp())
    .pipe(dest(path.img.dest))
    .pipe(src(path.img.src))
    .pipe(newer(path.img.dest))
    .pipe(gulpIf(app.isProd, imagemin(app.imagemin)))
    .pipe(dest(path.img.dest));
}

module.exports = img;