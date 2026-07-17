/**
 * ==========================================================
 * ATS ATP Repository
 * ==========================================================
 * Repository untuk tabel MASTER_ATP
 * ==========================================================
 */
class ATPRepository {

  /**
   * Mengambil sheet MASTER_ATP
   * @return {GoogleAppsScript.Spreadsheet.Sheet}
   */
  static getSheet() {
    return DatabaseManager.getSheet("MASTER_ATP");
  }

  /**
   * Mengambil daftar header dari baris pertama
   * @return {string[]}
   */
  static getHeaders() {
    const sheet = this.getSheet();
    return sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  }

  /**
   * Mengambil seluruh data ATP dalam bentuk Array of Object
   * @return {Object[]}
   */
  static getAll() {
    const sheet = this.getSheet();
    const values = sheet.getDataRange().getValues();

    if (values.length <= 1) {
      return [];
    }

    const headers = values.shift();

    return values.map(row => {
      const item = {};
      headers.forEach((header, index) => {
        item[header] = row[index];
      });
      return item;
    });
  }

  /**
   * Menyimpan data ATP baru ke baris terakhir
   * @param {Object} data 
   * @return {Object}
   */
  static save(data) {
    const sheet = this.getSheet();
    const headers = this.getHeaders();

    const row = headers.map(header => {
      return data[header] !== undefined ? data[header] : "";
    });

    sheet.appendRow(row);
    return data;
  }

  /**
   * Mengambil data ATP berdasarkan ID
   * @param {string|number} id 
   * @return {Object|null}
   */
  static getById(id) {
    const data = this.getAll();
    return data.find(item => String(item.ID) === String(id)) || null;
  }

  /**
   * Mengupdate data ATP berdasarkan ID
   * @param {string|number} id 
   * @param {Object} data 
   * @return {boolean}
   */
  static update(id, data) {
    const sheet = this.getSheet();
    const headers = this.getHeaders();
    const values = sheet.getDataRange().getValues();

    for (let i = 1; i < values.length; i++) {
      // Menggunakan pencocokan string agar aman dari perbedaan tipe data
      if (String(values[i][0]) === String(id)) {
        const row = headers.map((header, index) => {
          return data[header] !== undefined ? data[header] : values[i][index];
        });

        sheet.getRange(i + 1, 1, 1, row.length).setValues([row]);
        return true;
      }
    }
    return false;
  }

  /**
   * Menghapus baris ATP berdasarkan ID
   * @param {string|number} id 
   * @return {boolean}
   */
  static delete(id) {
    const sheet = this.getSheet();
    const values = sheet.getDataRange().getValues();

    for (let i = 1; i < values.length; i++) {
      if (String(values[i][0]) === String(id)) {
        sheet.deleteRow(i + 1);
        return true;
      }
    }
    return false;
  }
}

