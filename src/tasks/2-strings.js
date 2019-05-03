/**
 * Функция принимает строку и возвращает ее же, но параметризированную.
 * Все символы - нижнего регистра, слова соединены дефисом.
 * Пример: Hello from the other side -> hello-from-the-other-side
 *
 * @param {string} string
 */

function parameterize(string) {}

/**
 * Функция принимает имя, фамилию, департамент и зарплату сотрудника
 * и форматирует эту информацию в виде:
 * <name><tab>|<tab><surname><tab>|<tab><department><tab>|<tab><salary>$
 *
 * Внимание! Зарплата задана числом, но должна быть выведена в виде
 * строки, оканчивающейся $.
 * Разделитель - символ табуляции.
 *
 * @param {string} name
 * @param {string} surname
 * @param {string} department
 * @param {number} salary
 */

function formatEmployee(name, surname, department, salary) {}

/**
 * Функция принимает предложение и заменяет в нем все вхождения фразы
 * 'not bad' на 'good'. Причем между not и bad могут стоять другие слова,
 * например: not that bad, not so bad
 *
 * @param {string} sentence
 */

function notBad(sentence) {}

/**
 * Функция принимает массив строк emoji и возвращает
 * строку-шифр, созданную из последовательности кодовых точек.
 * Шифр каждого эмоджи разделить дефисом.
 *
 * @param {...string} emojis
 */

function emojiCipher(...emojis) {}

module.exports = {
  parameterize,
  formatEmployee,
  notBad,
  emojiCipher
};
