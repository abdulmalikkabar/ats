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

