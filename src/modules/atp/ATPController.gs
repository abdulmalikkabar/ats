/**
 * ==========================================================
 * ATS ATP Controller
 * ==========================================================
 */

class ATPController {

  /**
   * Mengambil seluruh ATP
   */
  static getAll() {
    return ATPService.getAll();
  }

  /**
   * Menyimpan ATP baru
   */
  static create(data) {
    return ATPService.create(data);
  }

}


