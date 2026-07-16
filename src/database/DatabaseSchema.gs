/**
 * ==========================================================
 * ATS DATABASE SCHEMA v1.0
 * ==========================================================
 * Seluruh struktur database ATS.
 * Jangan mengubah schema setelah sistem berjalan,
 * kecuali melalui proses migrasi.
 * ==========================================================
 */

const DATABASE_SCHEMA = {

  /**
   * ========================================================
   * SYSTEM
   * ========================================================
   */

  CONFIG: [
    "KEY",
    "VALUE",
    "KETERANGAN"
  ],

  SETTINGS: [
    "KEY",
    "VALUE",
    "UPDATED_AT"
  ],

  /**
   * ========================================================
   * MASTER DATA
   * ========================================================
   */

  MASTER_SEKOLAH: [
    "ID",
    "NAMA_SEKOLAH",
    "NPSN",
    "ALAMAT",
    "KECAMATAN",
    "KABUPATEN",
    "PROVINSI",
    "KEPALA_SEKOLAH",
    "NIP_KEPALA",
    "LOGO_FILE_ID",
    "STATUS"
  ],

  MASTER_GURU: [
    "ID",
    "NAMA",
    "NIP",
    "EMAIL",
    "NO_HP",
    "JABATAN",
    "STATUS"
  ],

  MASTER_MAPEL: [
    "ID",
    "KODE",
    "NAMA",
    "STATUS"
  ],

  MASTER_KELAS: [
    "ID",
    "NAMA",
    "FASE_ID",
    "STATUS"
  ],

  MASTER_FASE: [
    "ID",
    "NAMA",
    "DESKRIPSI",
    "STATUS"
  ],

  /**
   * ========================================================
   * KNOWLEDGE BASE AI
   * ========================================================
   */

  MASTER_REFERENSI: [
    "ID",
    "JENIS",
    "JUDUL",
    "MAPEL_ID",
    "KELAS_ID",
    "FASE_ID",
    "TAHUN",
    "SUMBER",
    "FILE_ID",
    "URL",
    "VERSI",
    "STATUS",
    "KETERANGAN",
    "CREATED_AT"
  ],

  /**
   * ========================================================
   * ATP
   * ========================================================
   */

  MASTER_ATP: [
    "ID",
    "KODE_ATP",
    "SEKOLAH_ID",
    "MAPEL_ID",
    "KELAS_ID",
    "FASE_ID",
    "TAHUN_AJARAN",
    "SEMESTER",
    "VERSI",
    "STATUS",
    "DIBUAT_OLEH",
    "DIBUAT_PADA",
    "DIUBAH_PADA",
    "KETERANGAN"
  ],

  DETAIL_ATP: [
    "ID",
    "ATP_ID",
    "NO_ATP",
    "TUJUAN_PEMBELAJARAN",
    "KKTP",
    "MATERI",
    "SUB_MATERI",
    "ALOKASI_WAKTU",
    "DIMENSI_PROFIL_LULUSAN",
    "PENGALAMAN_MEMAHAMI",
    "PENGALAMAN_MENGAPLIKASI",
    "PENGALAMAN_MEREFLEKSI",
    "ASESMEN_AWAL",
    "ASESMEN_FORMATIF",
    "ASESMEN_SUMATIF",
    "SUMBER_BELAJAR",
    "CATATAN",
    "URUTAN",
    "STATUS"
  ],

  /**
   * ========================================================
   * MODUL PEMBELAJARAN
   * ========================================================
   */

  MODUL_AJAR: [
    "ID",
    "DETAIL_ATP_ID",
    "JUDUL",
    "VERSI",
    "STATUS",
    "CREATED_AT",
    "UPDATED_AT"
  ],

  PROTA: [
    "ID",
    "ATP_ID",
    "STATUS",
    "UPDATED_AT"
  ],

  PROMES: [
    "ID",
    "ATP_ID",
    "STATUS",
    "UPDATED_AT"
  ],

  /**
   * ========================================================
   * AI
   * ========================================================
   */

  AI_CONTEXT: [
    "ID",
    "ENTITY",
    "ENTITY_ID",
    "JENIS",
    "PROMPT",
    "RESPONSE",
    "MODEL",
    "TOKEN_INPUT",
    "TOKEN_OUTPUT",
    "CREATED_AT"
  ],

  LOG_AI: [
    "ID",
    "MODEL",
    "TOKEN_INPUT",
    "TOKEN_OUTPUT",
    "BIAYA",
    "WAKTU"
  ],

  /**
   * ========================================================
   * IMPORT
   * ========================================================
   */

  IMPORT_HISTORY: [
    "ID",
    "JENIS",
    "NAMA_FILE",
    "FILE_ID",
    "STATUS",
    "HASIL",
    "CREATED_AT"
  ]

};