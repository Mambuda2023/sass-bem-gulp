const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");

const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");

const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const size = require("gulp-size");
const browsersync = require("browser-sync").create();
const del = require("del");
/**
 * Данный объект содержит зависимости
 * Если структура файлов другая просто измениете ее
 * Если расширения другие или их больше создйте МАССИВ
 * Пример: paths.styles.src:["ваш путь/*.sass", "ваш путь/*.less"]
 * Или используйте регулярные выражения
 */

const paths = {
  styles: {
    src: ["src/scss/**/*.scss"],
    dest: "dist/styles",
  },
  scripts: {
    src: [
      "node_modules/jquery/dist/jquery.js",
      "node_modules/slick-carousel/slick/slick.js",
      "src/script/**/*.js",
    ],
    dest: "dist/scripts/",
  },
  images: {
    src: "src/images/**/*.{jpg,jpeg,png,svg}",
    dest: "dist/images",
  },
  html: {
    src: ["src/*.html", "src/*.pug"],
    dest: "dist/",
  },
};
// Очистка дирикторий за исключение изображений
function clean() {
  return del(["dist/*", "!dist/images"]);
}

/**
 * Обработак стилий(sass).Можнь расширить (less,stylus и тд).
 * 1.Добавте нужный препроцессор
 * 2.Добавте нужное расширение в зависимости (paths.styles.src: ["Ваш путь.sass","Ваш путь.less])
 * 2.Замените .pipe(sass()) на .pipe(less())
 * Можно изменить путь обратитесь к объекту paths
 */
function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cleanCSS({ level: 2 }))
    .pipe(concat("style.min.css"))
    .pipe(size())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browsersync.stream());
}
/**
 * Обработак script(js и ts).
 * Можно изменить путь обратитесь к объекту paths
 */
function scripts() {
  return gulp
    .src(paths.scripts.src, { sourcemaps: true })
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(concat("main.min.js"))
    .pipe(size())
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browsersync.stream());
}
/**
 * Обработак картинок.
 * Для расширения возможностей типа фалов обратитесь к объекту
 * paths.images.src:"src/images/"{jpg,jpeg,png,svg,нужные типы файлов}"
 * Можно изменить путь обратитесь к объекту paths
 */
function images() {
  return gulp
    .src(paths.images.src)
    .pipe(newer(paths.images.dest))
    .pipe(imagemin({ progressiv: true }))
    .pipe(size())
    .pipe(gulp.dest(paths.images.dest))
    .pipe(browsersync.stream());
}
/**
 * Обработак HTML.
 * Можно изменить путь обратитесь к объекту paths
 */
function html() {
  return gulp
    .src(paths.html.src)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(size())
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browsersync.stream());
}

function watch() {
  browsersync.init({
    server: "./dist/",
  });
  gulp.watch(paths.html.dest).on("change", browsersync.reload);
  gulp.watch(paths.html.src, html);
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.images.src, images);
}

const build = gulp.series(
  clean,
  gulp.parallel(html, styles, scripts, images),
  watch
);

exports.styles = styles;
exports.watch = watch;
exports.clean = clean;
exports.scripts = scripts;
exports.html = html;
exports.images = images;
exports.build = build;
exports.default = build;
