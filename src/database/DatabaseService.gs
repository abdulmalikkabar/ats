/**
 * ==========================================================
 * ATS Database Service
 * ==========================================================
 */

class DatabaseService {

  static setup() {

    const databaseId = PropertiesService
      .getScriptProperties()
      .getProperty("DATABASE_ID");

    if (databaseId) {

      Logger.log("Database ATS sudah tersedia.");

      return SpreadsheetApp.openById(databaseId);

    }

    return DatabaseRepository.createDatabase();

  }

}