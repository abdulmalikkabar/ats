/**
 * ==========================================================
 * ID Generator
 * ==========================================================
 */

class IdGenerator {

  static generate(prefix) {

    return prefix + "_" + Utilities.getUuid();

  }

}