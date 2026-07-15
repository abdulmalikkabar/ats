class Router {

  static render() {
    return HtmlService
      .createTemplateFromFile("src/views/layout/Layout_Main")
      .evaluate()
      .setTitle(Config.APP.NAME);
  }

}