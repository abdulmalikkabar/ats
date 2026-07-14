/**
 * Router
 */

class Router {

  static render() {

    return HtmlService
      .createHtmlOutput('<h1>AI Teacher Studio</h1>')
      .setTitle(Config.APP_NAME);

  }

}