/*
2. Чему будут равны переменные x и a в примере ниже? Написать почему так произошло
(описать последовательность действий).

let a = 2;
let x = 1 + (a *= 2);

1. Присваиваем переменной "a" значение 2
2. Выполняем действие по приоритету в круглых скобках (a *= 2), это выражение означает, что значение переменной "а" нужно умножить на 2 и переприсвоить значение, получаем а = 2 * 2 -> a = 4
3. x = 1 + 4
4. x = 5

В конечном итоге получаем:
a == 4
x == 5
*/

"use strict";

let a = 2;
let x = 1 + (a *= 2);

console.log(a);
console.log(x);