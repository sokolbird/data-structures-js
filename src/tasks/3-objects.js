/**
 * Функция принимает объект и возвращает его копию, в которой ключи
 * стали значениями, а значения - ключами.
 *
 * @param {object} object
 */

function objectInverse(object) {}

/**
 * Функция принимает JSON-строку с какими-то конфигурационными данными
 * и преобразует ее в JS-объект.
 *
 * @param {string} jsonConfig
 */

function provideConfig(jsonConfig) {}

/**
 * Функция принимает объект
 * Функция должна вернуть произведение значений свойств, где значение - число
 *
 * @param {object} obj
 */
function numericPropsProduct(obj) {}

/**
 * Функция принимает объект.
 * Функция должна вернуть независимую копию объекта.
 *
 * @param {object} obj
 */

function clone(obj) {}

module.exports = {
  objectInverse,
  provideConfig,
  numericPropsProduct,
  clone
};
