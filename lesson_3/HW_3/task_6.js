/*
6. Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

"use strict";

function sumX(quantity) {
    if (quantity > 1) {
        return "x" + sumX(quantity - 1)
    } else {
        return "x"
    }
}

for (let i = 1; i <= 20; i++) {
    console.log(sumX(i));
}