const browserSync = require('browser-sync').create();

// Конфигурация
const path = require("../config/path.js");


// Статический сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root
    }
  });
}

module.exports = server;