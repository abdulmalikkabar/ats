class DatabaseRepository {

  static createDatabase() {

    const db = SpreadsheetApp.create("ATS_DATABASE");

    PropertiesService
      .getScriptProperties()
      .setProperty("DATABASE_ID", db.getId());

    Logger.log("Database berhasil dibuat");
    Logger.log(db.getUrl());

  }

}