/**
 * ==========================================================
 * ATS Database Repository
 * ==========================================================
 * Bertanggung jawab membuat database ATS beserta seluruh
 * struktur Spreadsheet berdasarkan DATABASE_SCHEMA.
 * ==========================================================
 */

class DatabaseRepository {

  /**
   * Membuat Database ATS
   */
  static createDatabase() {

    // Buat Spreadsheet baru
    const db = SpreadsheetApp.create(Config.APP.NAME + "_DATABASE");

    // Simpan Database ID
    PropertiesService
      .getScriptProperties()
      .setProperty("DATABASE_ID", db.getId());

    // Sheet default
    const defaultSheet = db.getSheets()[0];

    let firstSheet = true;

    // Buat seluruh sheet
    for (const sheetName in DATABASE_SCHEMA) {

      let sheet;

      if (firstSheet) {

        // Gunakan Sheet1 sebagai sheet pertama
        sheet = defaultSheet;
        sheet.setName(sheetName);

        firstSheet = false;

      } else {

        sheet = db.insertSheet(sheetName);

      }

      this.initializeSheet(sheet, DATABASE_SCHEMA[sheetName]);

    }

    Logger.log("========================================");
    Logger.log("ATS DATABASE BERHASIL DIBUAT");
    Logger.log("Nama : " + db.getName());
    Logger.log("ID   : " + db.getId());
    Logger.log("URL  : " + db.getUrl());
    Logger.log("========================================");

    return db;

  }

  /**
   * Inisialisasi Header Sheet
   */
  static initializeSheet(sheet, headers) {

    // Header
    sheet
      .getRange(1, 1, 1, headers.length)
      .setValues([headers]);

    // Format Header
    sheet
      .getRange(1, 1, 1, headers.length)
      .setFontWeight("bold")
      .setBackground("#1976D2")
      .setFontColor("#FFFFFF")
      .setHorizontalAlignment("center");

    // Freeze Header
    sheet.setFrozenRows(1);

    // Auto Resize
    sheet.autoResizeColumns(1, headers.length);

  }

}