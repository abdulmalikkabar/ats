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