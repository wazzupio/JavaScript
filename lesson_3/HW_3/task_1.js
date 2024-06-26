/*
1. С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль,
с помощью console.log) от 0 до 10 включительно, чтобы результат выглядел так:

0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

"use strict";

for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
        continue;
    }

    if (i % 2 === 0) {
        console.log(`${i} - четное число`);
    } else {
        console.log(`${i} - нечетное число`);
    }
}