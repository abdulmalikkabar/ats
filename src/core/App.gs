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



/**
 * Menyimpan ATP dari browser.
 *
 * Normalisasi, validasi, dan business logic
 * ditangani oleh ATPService.
 */
function saveATP(data) {
  try {
    const result = ATPController.create(data);

    return {
      success: true,
      message: "Data ATP berhasil disimpan.",
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