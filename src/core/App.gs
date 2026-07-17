/**
 * ==========================================================
 * AI Teacher Studio (ATS)
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

  const result = ATPController.getAll();

  if (!Array.isArray(result)) {
    return [];
  }

  return result.map(function(item) {

    item = item || {};

    return {
      ID: item.ID || "",
      KODE_ATP: item.KODE_ATP || "",
      SEKOLAH_ID: item.SEKOLAH_ID || "",
      MAPEL_ID: item.MAPEL_ID || "",
      KELAS_ID: item.KELAS_ID || "",
      FASE_ID: item.FASE_ID || "",
      TAHUN_AJARAN: item.TAHUN_AJARAN || "",
      SEMESTER: item.SEMESTER || "",
      VERSI: item.VERSI || "",
      STATUS: item.STATUS || "",
      KETERANGAN: item.KETERANGAN || ""
    };

  });

}

function saveATP(data) {
  return ATPController.create(data);
}


/**
 * ==========================================================
 * PAGE LOADER
 * ==========================================================
 */

function getPage(pageName) {

  let path = "";

  switch (pageName) {

    case "Page_Dashboard":
      path =
        "src/views/pages/Page_Dashboard";
      break;

    case "Page_ATP":
      path =
        "src/modules/atp/Page_ATP";
      break;

    default:
      throw new Error(
        "Halaman tidak ditemukan: " +
        pageName
      );

  }

  return HtmlService
    .createHtmlOutputFromFile(path)
    .getContent();

}


/**
 * ==========================================================
 * DATABASE UTILITY
 * ==========================================================
 */

function resetDatabase() {

  PropertiesService
    .getScriptProperties()
    .deleteProperty("DATABASE_ID");

  Logger.log(
    "DATABASE_ID berhasil dihapus."
  );

}

/**
 * Menyimpan data ATP dari frontend.
 */
function saveATP(data) {

  try {

    if (!data || typeof data !== "object") {
      throw new Error(
        "Data ATP tidak valid."
      );
    }

    const payload = {
      KODE_ATP: String(
        data.KODE_ATP || ""
      ).trim(),

      SEKOLAH_ID: String(
        data.SEKOLAH_ID || ""
      ).trim(),

      MAPEL_ID: String(
        data.MAPEL_ID || ""
      ).trim(),

      KELAS_ID: String(
        data.KELAS_ID || ""
      ).trim(),

      FASE_ID: String(
        data.FASE_ID || ""
      ).trim(),

      TAHUN_AJARAN: String(
        data.TAHUN_AJARAN || ""
      ).trim(),

      SEMESTER: String(
        data.SEMESTER || ""
      ).trim(),

      STATUS: String(
        data.STATUS || "Draft"
      ).trim(),

      KETERANGAN: String(
        data.KETERANGAN || ""
      ).trim()
    };

    if (!payload.KODE_ATP) {
      throw new Error(
        "Kode ATP wajib diisi."
      );
    }

    if (!payload.SEKOLAH_ID) {
      throw new Error(
        "ID Sekolah wajib diisi."
      );
    }

    if (!payload.MAPEL_ID) {
      throw new Error(
        "ID Mata Pelajaran wajib diisi."
      );
    }

    if (!payload.KELAS_ID) {
      throw new Error(
        "ID Kelas wajib diisi."
      );
    }

    if (!payload.FASE_ID) {
      throw new Error(
        "ID Fase wajib diisi."
      );
    }

    if (!payload.TAHUN_AJARAN) {
      throw new Error(
        "Tahun ajaran wajib diisi."
      );
    }

    if (
      payload.SEMESTER !== "1" &&
      payload.SEMESTER !== "2"
    ) {
      throw new Error(
        "Semester tidak valid."
      );
    }

    const result =
      ATPController.create(payload);

    return {
      success: true,
      message:
        "Data ATP berhasil disimpan.",
      data: result || null
    };

  } catch (error) {

    console.error(
      "[SERVER] saveATP gagal:",
      error
    );

    return {
      success: false,
      message:
        error && error.message
          ? error.message
          : "Data ATP gagal disimpan."
    };

  }

}