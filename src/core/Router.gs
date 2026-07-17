/**
 * ==========================================================
 * ATS Router
 * File : Router.gs
 * ==========================================================
 */

class Router {

  /**
   * Render halaman utama aplikasi.
   *
   * @returns {HtmlOutput}
   */
  static render() {

    const template =
      HtmlService.createTemplateFromFile(
        "src/views/layout/Layout_Main"
      );

    /*
     * Helper include() agar dapat digunakan
     * di semua file HTML.
     *
     * Contoh:
     * <?!= include("src/views/page/Page_ATP") ?>
     */
    template.include = View.include;

    return template
      .evaluate()
      .setTitle(Config.APP.NAME)
      .setXFrameOptionsMode(
        HtmlService.XFrameOptionsMode.DEFAULT
      );

  }

}