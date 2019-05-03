/**
 * Функция принимает аргумент и определяет,
 * является ли заданное значение натуральным числом.
 * Внимание: функция может получить любое значение, отличное от числа.
 * Тогда она должна вернуть false.
 *
 * P. S. Натуральное число - целочисленное значение из ряда 1, 2, 3, 4....
 *
 * @param {any} value
 */

function isNatural(value) {}

/**
 * Функция принимает число x и возвращает число n > x, причем n делится
 * без остатка на 5.
 *
 * @param {number} x
 */

function intRoundFiveMultiple(x) {}

/**
 * Функция конвертирует угол в градусах в радианы, округляя до
 * третьего знака после запятой
 *
 * @param {number} degrees
 */

function degToRad(degrees) {}

/**
 * Функция принимает несколько строк с числами в шестнадцатеричном формате.
 * Необходимо вернуть их сумму в виде строки.
 *
 * @param  {...number} numbers
 */
function addHexNumbers(...numbers) {}

module.exports = {
  isNatural,
  intRoundFiveMultiple,
  degToRad,
  addHexNumbers
};
