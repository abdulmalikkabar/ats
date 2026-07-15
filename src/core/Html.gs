/**
 * HTML Helper
 */

const View = {

  layout(name) {
    return `src/views/layout/${name}`;
  },

  page(name) {
    return `src/views/pages/${name}`;
  },

  css(name) {
    return `src/assets/css/${name}`;
  },

  js(name) {
    return `src/assets/js/${name}`;
  }

};

function include(path) {
  return HtmlService
    .createHtmlOutputFromFile(path)
    .getContent();
}