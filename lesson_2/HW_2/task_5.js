/*
5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.
*/

"use strict";

/**
 * Функция, котрая принимает два аргумента(числа), так же принимает одну из операций (сложение, вычитание, деление, умножение) и выполняет выбранную операцию с числами.
 * Возможные операторы:
 * 'getSum' - сумма,
 * 'getDiff' - разность,
 * 'getQuot' - частное,
 * 'getProd' - произведение.
 * @param {num} arg1 первое число
 * @param {num} arg2 второе число
 * @param {str} operation Возможные операторы: 'getSum', 'getDiff', 'getQuot', 'getProd'
 * @returns {num} 
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'getSum':
            return (`${arg1} + ${arg2} = ${arg1 + arg2}`);
        case 'getDiff':
            return (`${arg1} - ${arg2} = ${arg1 - arg2}`);
        case 'getQuot':
            return (`${arg1} / ${arg2} = ${arg1 / arg2}`);
        case 'getProd':
            return (`${arg1} * ${arg2} = ${arg1 * arg2}`);
    }
}

console.log(mathOperation(1, 2, 'getSum'));
console.log(mathOperation(2, 3, 'getDiff'));
console.log(mathOperation(12, 3, 'getQuot'));
console.log(mathOperation(5, 6, 'getProd'));