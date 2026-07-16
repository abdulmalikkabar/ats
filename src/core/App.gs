/**
 * ==========================================================
 * AI Teacher Studio (ATS)
 * ==========================================================
 * Entry Point
 * ==========================================================
 */

/**
 * Web App Entry
 */
function doGet(e) {
  return Router.render();
}

/**
 * ==========================================================
 * INSTALLER
 * ==========================================================
 */

function setupATS() {
  Installer.setup();
}

/**
 * ==========================================================
 * ATP API
 * ==========================================================
 */

function getAllATP() {
  return ATPController.getAll();
}

function saveATP(data) {
  return ATPController.save(data);
}

/**
 * Mengambil halaman HTML
 */
/**
 * Mengambil halaman HTML
 */
function getPage(pageName) {

  let path = "";

  switch (pageName) {

    case "Page_Dashboard":
      path = "src/views/pages/" + pageName;
      break;

    case "Page_ATP":
      path = "src/modules/atp/" + pageName;
      break;

    default:
      throw new Error("Halaman tidak ditemukan : " + pageName);

  }

  return HtmlService
    .createHtmlOutputFromFile(path)
    .getContent();

}


function resetDatabase() {
  PropertiesService
    .getScriptProperties()
    .deleteProperty("DATABASE_ID");

  Logger.log("DATABASE_ID berhasil dihapus.");
}