# Возможные ошибки

    * Обратная совместимость.
        1. Побробуйте понизить версию, возможно пакет не поддерживает common.js
        2. Преписать сборку на imoport и export. Пример такой сборки по ссылке <https://github.com/gulpjs/gulp>
    * Не соответствие структуры проекта
        1. Проверить структуру папок
        2. Проверить и преписать структуру
            - Перейдите в gulpfile.js
            - Найдите объект paths в нем указана моя структура для обработки файлов
            - Измениете структуру, которая нужна вам (Дополнительная информаци как это сделать в файле gulpfile.js)

## Инициализация проекта

    * Установка node.js - <https://nodejs.org/en>
    * Установка gulp глобально - <https://gulpjs.com/docs/en/getting-started/quick-start>
    * Для установки всех пакетов воспользуйтесь командой - npm init
    * Перейдите в gulpfile.js
    * Приступите к настройки нужных типов файлов и нужных зависимостей
    * Перйдите в пакетный менеджер для добавления нужных расширений - <https://www.npmjs.com/>
    * Документация сборки - <https://github.com/gulpjs/gulp>

### Пакеты использоавнные в данной сборке
    * gulp-htmlmin(Минификация) - <https://www.npmjs.com/package/gulp-htmlmin>
    * del(Для очистки директорий) - <https://www.npmjs.com/package/del>
    * gulp-autoprefixer(Для добавление префиксов в стилях) - <https://www.npmjs.com/package/gulp-autoprefixer>
    * gulp-sass(Препроцессор. Можно изменить) - <https://www.npmjs.com/package/gulp-sass>
    * gulp-clean-css(Предоставляет файл name и path для дальнейшего анализа.) - <https://www.npmjs.com/package/gulp-clean-css>
    * gulp-imagemin(Минификация картинок) - <https://www.npmjs.com/package/gulp-imagemin>
    * gulp-newer(Плагин для Gulp, позволяющий просматривать только те исходные файлы, которые новее соответствующих файлов назначения. ) - <https://www.npmjs.com/package/gulp-newer>
    * gulp-uglify (Минификация фалов js) - <https://www.npmjs.com/package/gulp-uglify>
    * gulp-typescript (Работа с typescript) - <https://www.npmjs.com/package/gulp-typescript>
    * gulp-babel (Транспилирует в старый синтксис js) - <https://www.npmjs.com/package/gulp-babel>
    * gulp-size (Показывает размер файлов при их обработке) -  <https://www.npmjs.com/package/gulp-size>
    * browser-sync - <https://browsersync.io/docs/gulp>
    * jquery(Библиотека) - <https://www.npmjs.com/package/jquery>
