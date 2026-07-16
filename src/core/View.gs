/**
 * ==========================================================
 * AI Teacher Studio (ATS)
 * View Helper
 * Version : 1.0
 * ==========================================================
 */

class View {

  /**
   * ==========================================================
   * Include HTML File
   * ==========================================================
   */
  static include(file) {
    return HtmlService
      .createHtmlOutputFromFile(file)
      .getContent();
  }

  /**
   * ==========================================================
   * Layout
   * src/views/layout/
   * ==========================================================
   */
  static layout(name) {
    return `src/views/layout/${name}`;
  }

  /**
   * ==========================================================
   * Pages
   * src/views/pages/
   * ==========================================================
   */
  static page(name) {
    return `src/views/pages/${name}`;
  }

  /**
   * ==========================================================
   * UI CSS
   * src/ui/css/
   * ==========================================================
   */
  static css(name) {
    return `src/ui/css/${name}`;
  }

  /**
   * ==========================================================
   * UI JavaScript
   * src/ui/js/
   * ==========================================================
   */
  static js(name) {
    return `src/ui/js/${name}`;
  }

  /**
   * ==========================================================
   * Modules
   * src/modules/{module}/
   * ==========================================================
   */
  static module(module, file) {
    return `src/modules/${module}/${file}`;
  }

  /**
   * ==========================================================
   * UI Components
   * ==========================================================
   */

 static loading(name) {
  return `src/ui/components/${name}`;
}

  static dialog(name) {
    return `src/ui/dialog/${name}`;
  }

  static modal(name) {
    return `src/ui/modal/${name}`;
  }

  static table(name) {
    return `src/ui/table/${name}`;
  }

  static form(name) {
    return `src/ui/form/${name}`;
  }

  static toast(name) {
    return `src/ui/toast/${name}`;
  }

}