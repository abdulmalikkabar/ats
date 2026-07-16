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



/**
 * ==========================================================
 * TEST ATP CONTROLLER
 * ==========================================================
 */

function testATPController() {

  const data = ATPController.getAll();

  Logger.log(JSON.stringify(data, null, 2));

}