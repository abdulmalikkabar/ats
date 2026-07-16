/**
 * ==========================================================
 * ATS Router
 * ==========================================================
 */

class Router {

  static render() {

    const template = HtmlService.createTemplateFromFile(
      "src/views/layout/Layout_Main"
    );

    // Helper include() untuk semua file HTML
    template.include = View.include;

    return template
      .evaluate()
      .setTitle(Config.APP.NAME);

  }

}