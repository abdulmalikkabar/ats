/**
 * ==========================================================
 * ATS ATP Service
 * ==========================================================
 * Business Logic untuk Modul ATP
 * ==========================================================
 */

class ATPService {

  /**
   * Mengambil seluruh data ATP
   */
  static getAll() {
    return ATPRepository.getAll();
  }

  /**
   * ==========================================================
   * Membuat ATP baru
   * ==========================================================
   */
  static create(data) {
    // Validasi sederhana
    if (!data.MAPEL_ID) {
      throw new Error("MAPEL harus dipilih.");
    }

    if (!data.KELAS_ID) {
      throw new Error("Kelas harus dipilih.");
    }

    if (!data.FASE_ID) {
      throw new Error("Fase harus dipilih.");
    }

    if (!data.TAHUN_AJARAN) {
      throw new Error("Tahun Ajaran wajib diisi.");
    }

    // Generate ID
    data.ID = IdGenerator.generate("ATP");

    // Default Value
    data.STATUS = data.STATUS || "Draft";
    data.VERSI = data.VERSI || "1.0";
    data.DIBUAT_PADA = new Date();
    data.DIUBAH_PADA = "";

    // Simpan ke database
    ATPRepository.save(data);

    return data;
  }

}

/**
 * ==========================================================
 * TEST ATP SERVICE
 * ==========================================================
 */

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

  // Sekarang fungsi ini bisa memanggil ATPService.create() dengan benar
  const result = ATPService.create(data);

  Logger.log(JSON.stringify(result, null, 2));
}