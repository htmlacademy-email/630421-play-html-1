const { src, dest } = require('gulp');
const inlineCss = require('gulp-inline-css');

const INDEX_EMAIL = 2;

const sources = [
  '1-invitation',
  '2-welcome',
  '3-promo'
];


const styles = () => {
  return src(`${sources[INDEX_EMAIL]}/*.html`)
    .pipe(inlineCss({
      removeHtmlSelectors: true,
    }))
    .pipe(dest(`build/${sources[INDEX_EMAIL]}`)); // Путь, куда будет положен результат
};

exports.default = styles;
