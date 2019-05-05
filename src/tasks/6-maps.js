/**
 * Функция принимает список пар (английское слово, русское слово). Например:
 * [{ 'table': 'стол' }, { 'table': 'таблица' }, { 'fish': 'рыба' }]
 *
 * Необходимо составить и вернуть англо-русский словарь (Map), в котором
 * в котором одному английскому слову соответствует список (массив) русских.
 *
 * @param {Object[]} pairsList
 *
 * @returns {Map}
 */

function getEnRusDictionary(pairsList) {}

/**
 * Функция принимает Map с парами вида { country: 'Ukraine, city: 'Kharkiv' } => [15, 14, 8, ...]
 * Функция должна вернуть массив строк вида "Average temperature in Ukraine, Kharkiv: 13.5°C"
 * где 13,5 - средняя температура из массива, округленная до одного знака после запятой
 *
 * @param {Map} temperatureMap
 */

function prettyPrintAverageTemperature(temperatureMap) {}

module.exports = {
  getEnRusDictionary,
  prettyPrintAverageTemperature
};
