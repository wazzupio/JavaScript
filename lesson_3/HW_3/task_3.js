/*
3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый
товар применить скидку 15%, можете использовать метод forEach
*/

"use strict";

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

/**
 * Функция расчета 15% скидки
 * @param {num} price стоимость товара
 * @returns {num} стоимость товара со скидкой
 */
function sale15(price) {
    return price - ((price / 100) * 15)
}

let sale_products = products.forEach(element => {
    console.log(`без скидки: ${element.price} / со скидкой: ${sale15(element.price)}`)
});