function testATPService() {
  const data = {
    KODE_ATP: "ATP-002",
    SEKOLAH_ID: "SCH001",
    MAPEL_ID: "MAP001",
    KELAS_ID: "KLS001",
    FASE_ID: "FSA001",
    TAHUN_AJARAN: "2025/2026",
    SEMESTER: "1",
    KETERANGAN: "Data dari ATP Service"
  };

  const result = ATPService.create(data);

  Logger.log(JSON.stringify(result, null, 2));

}

/**
 * ==========================================================
 * TEST ATP CONTROLLER
 * ==========================================================
 */

function testATPController() {

  const data = ATPController.getAll();

  Logger.log(
    JSON.stringify(data, null, 2)
  );

}


/**
 * PERINGATAN:
 * Menghapus record ATP pertama.
 * Jangan dijalankan pada database produksi.
 */
function testATPRepositoryDeleteFirstRecord() {

  const data = ATPRepository.getAll();

  if (data.length == 0) {

    Logger.log("Data kosong");

    return;

  }

  ATPRepository.delete(data[0].ID);

  Logger.log("Delete berhasil");

}