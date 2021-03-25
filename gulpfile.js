const gulp = require('gulp');
const inlineCss = require('gulp-inline-css');

const styles = () => {
  return gulp.src('1-invitation/*.html') // Путь, где лежат html-файлы, которые нужно инлайнить
    .pipe(inlineCss({
      removeHtmlSelectors: true,
    })) // Вызов функции
    .pipe(gulp.dest('build/1-invitation/')); // Путь, куда будет положен результат
};

exports.default = styles;
