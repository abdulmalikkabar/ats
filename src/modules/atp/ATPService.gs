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
    if (!data || typeof data !== "object") {
      throw new Error("Data ATP tidak valid.");
    }

    const payload = {
      KODE_ATP: String(data.KODE_ATP || "").trim(),
      SEKOLAH_ID: String(data.SEKOLAH_ID || "").trim(),
      MAPEL_ID: String(data.MAPEL_ID || "").trim(),
      KELAS_ID: String(data.KELAS_ID || "").trim(),
      FASE_ID: String(data.FASE_ID || "").trim(),
      TAHUN_AJARAN: String(data.TAHUN_AJARAN || "").trim(),
      SEMESTER: String(data.SEMESTER || "").trim(),
      STATUS: String(data.STATUS || "Draft").trim(),
      KETERANGAN: String(data.KETERANGAN || "").trim()
    };

    if (!payload.KODE_ATP) {
      throw new Error("Kode ATP wajib diisi.");
    }

    if (!payload.SEKOLAH_ID) {
      throw new Error("ID Sekolah wajib diisi.");
    }

    if (!payload.MAPEL_ID) {
      throw new Error("Mata pelajaran harus dipilih.");
    }

    if (!payload.KELAS_ID) {
      throw new Error("Kelas harus dipilih.");
    }

    if (!payload.FASE_ID) {
      throw new Error("Fase harus dipilih.");
    }

    if (!payload.TAHUN_AJARAN) {
      throw new Error("Tahun ajaran wajib diisi.");
    }

    if (
      payload.SEMESTER !== "1" &&
      payload.SEMESTER !== "2"
    ) {
      throw new Error("Semester tidak valid.");
    }

    payload.ID = IdGenerator.generate("ATP");
    payload.VERSI = "1.0";
    payload.DIBUAT_PADA = new Date();
    payload.DIUBAH_PADA = "";

    ATPRepository.save(payload);

    return payload;
  }

}