/**
 * ==========================================================
 * ATS Installer
 * ==========================================================
 */

function setupATS() {
  return Installer.setup();
}

function resetDatabase() {
  return Installer.reset();
}

class Installer {

  static setup() {

    return DatabaseService.setup();

  }

  static reset() {

    PropertiesService
      .getScriptProperties()
      .deleteProperty("DATABASE_ID");

    Logger.log("DATABASE_ID berhasil dihapus.");

  }

}