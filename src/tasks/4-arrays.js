/**
 * Дана строка str в которой записаны слова. В каждом слове строки
 * есть число от 1 до 9 обозначающее позицию слова в результате
 * сортировки. Объявить функцию order(str), которая  реализует
 * сортировку слов по их цифрам и возвращает отсортированную строку.
 *
 * @param {string} string
 */

function placeInOrder(string) {}

/**
 * Функция принимает массив с вложенностями и делает его "плоским".
 * Например: [1, [2], [3, [[4]]],[5,6]] -> [1, 2, 3, 4, 5, 6]
 *
 * @param {any[]} array
 */

function flatten(array) {}

/**
 * Функция принимает строку вида "ЭТ*ОП*РОС*Т*ОС*Т*РОК*А"
 * где буква - означает enqueue в очередь, звездочка - dequeue.
 * Вернуть результирующий массив с выполненными занесениями и вынесениями
 * из первоначально пустой очереди - структуры данных FIFO (first in, first out),
 * реализованной на основе массива.
 *
 * @param {string} commands
 */

function useQueue(commands) {}

/**
 * Функция принимает массив продуктов вида:
 * { name: 'milk', count: 2, expirationDate: '05.05.2019' }
 * и возвращает новый массив с названием и количеством продуктов,
 * срок годности которых еще не вышел.
 * НЕ ИСПОЛЬЗУЙТЕ ЦИКЛЫ.
 *
 * @typedef {Object} Product
 * @property {string} name product name
 * @property {number} count product count
 * @property {string} expirationDate product expiration date
 *
 * @param {Product[]} products
 */

function getFreshProducts(products) {}

/**
 * Функция принимает массив покупок вида { name: "Морковь", amount: 3, price: 2.50 }
 * Функция должна вернуть сумму всех покупок. НЕ ИСПОЛЬЗУЙТЕ ЦИКЛЫ.
 *
 * @typedef {Object} CartItem
 * @property {string} name product name
 * @property {number} amount product amount
 * @property {number} price product price
 *
 * @param {CartItem[]} items
 */
function calculateCart(items) {}

/**
 * Функция принимает массив пользователей и идентификатор поста и
 * проверяет, каждый ли пользователь оставил хоть один комментарий к этому посту.
 * НЕ ИСПОЛЬЗУЙТЕ ЦИКЛЫ.
 *
 * Объект пользователя в массиве:
 * { id, username, comments: [{ commentId, postId, commentText }] }
 *
 * @typedef {object} Comment
 * @property {string|number} commentId comment id
 * @property {string|number} postId post id
 * @property {string} commentText comment text
 *
 * @typedef {Object} User
 * @property {string|number} id user id
 * @property {string} username user name
 * @property {Comment[]} comments
 *
 * @param {User[]} users users list
 * @param {string|number} postId id of checking post
 */

function isPostCommentedByAll(users, postId) {}

module.exports = {
  placeInOrder,
  flatten,
  useQueue,
  getFreshProducts,
  calculateCart,
  isPostCommentedByAll
};
