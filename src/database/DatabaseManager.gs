/**
 * ==========================================================
 * Database Manager
 * ==========================================================
 */

class DatabaseManager {

  /**
   * Mengembalikan Spreadsheet ATS
   */
  static getDatabase() {

    const databaseId = PropertiesService
      .getScriptProperties()
      .getProperty("DATABASE_ID");

    if (!databaseId) {
      throw new Error("Database ATS belum di-setup. Jalankan setupATS().");
    }

    return SpreadsheetApp.openById(databaseId);

  }

  /**
   * Mengembalikan Sheet berdasarkan nama
   */
  static getSheet(sheetName) {

    const db = this.getDatabase();

    const sheet = db.getSheetByName(sheetName);

    if (!sheet) {
      throw new Error(`Sheet '${sheetName}' tidak ditemukan.`);
    }

    return sheet;

  }

}