/**
 * ==========================================================
 * ATS View Helper
 * ==========================================================
 */

class View {

  static include(file) {
    return HtmlService
      .createHtmlOutputFromFile(file)
      .getContent();
  }

  /* =========================
     Layout
  ========================= */

  static layout(name) {
    return "src/views/layout/" + name;
  }

  /* =========================
     Dashboard Page
  ========================= */

  static page(name) {
    return "src/views/pages/" + name;
  }

  /* =========================
     UI Framework CSS
  ========================= */

  static css(name) {
    return "src/ui/css/" + name;
  }

  /* =========================
     UI Framework JS
  ========================= */

  static js(name) {
    return "src/ui/js/" + name;
  }

  /* =========================
     Module
  ========================= */

  static module(module, file) {
    return `src/modules/${module}/${file}`;
  }

}