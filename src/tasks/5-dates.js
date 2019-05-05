require('../polyfills/intl');

/**
 * Функция принимает дату в виде строки
 * Функция должна вернуть день недели (например "вторник"), который был ровно 10 лет назад
 * Используйте Intl: https://learn.javascript.ru/intl
 *
 * @param {Date} dateString
 */
function timeTravel(dateString) {}

/**
 * Функция принимает массив из объектов, представляющих собой
 * информацию о сотрудниках: фамилия, дата заключения контракта и срок
 * (в годах), на который заключен контракт. Вернуть массив лишь из
 * тех сотрудников, котракт с которыми заканчивается в выходной день.
 *
 * @typedef {Object} Employee
 * @property {string} surname
 * @property {Date} startDate
 * @property {number} yearsAmount
 *
 * @param {Employee[]} employeeList
 */

function weekendEndingEmployees(employeeList) {}

/**
 * Функция принимает объект даты (дата меньше, чем сегодняшняя) и форматирует ее так, что:
 *
 * Если со времени date прошло менее секунды, то возвращает "just now".
 * Иначе если со времени date прошло менее минуты, то "n seconds ago".
 * Иначе если прошло меньше часа, то "m minutes ago".
 * Иначе полная дата в формате "dd.mm.yy hh:MM".
 *
 * @param {Date} date
 */

function formatDate(date) {}

module.exports = {
  timeTravel,
  weekendEndingEmployees,
  formatDate
};
