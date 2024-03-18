/*
4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с
двумя параметрами. Т.е. например, функция для сложения должна принимать два числа,
складывать их и возвращать результат. Обязательно использовать оператор return.
*/

"use strict";

/**
 * Функция получения суммы чисел
 * @param {num} a первое число
 * @param {num} b второе число
 * @returns {num} сумма чисел
 */
function getSum(a, b) {
    return a + b;
}
/**
 * Функция получения разности чисел
 * @param {num} a первое число
 * @param {num} b второе число
 * @returns {num} разность чисел
 */
function getDiff(a, b) {
    return a - b;
}

/**
 * Функция получения частного чисел
 * @param {num} a первое число
 * @param {num} b второе число
 * @returns {num} частное чисел
 */
function getQuot(a, b) {
    return a / b;
}

/**
 * Функция получения произведения чисел
 * @param {num} a первое число
 * @param {num} b второе число
 * @returns {num} произведение чисел
 */
function getProd(a, b) {
    return a * b;
}

console.log(`1 + 2 = ${getSum(1, 2)}`);
console.log(`3 - 4 = ${getDiff(3, 4)}`);
console.log(`12 / 3 = ${getQuot(12, 3)}`);
console.log(`5 * 6 = ${getProd(5, 6)}`);