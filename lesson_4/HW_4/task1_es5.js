/*
1. Сделайте в стиле es5, а затем в стиле es6
(по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6):
конструктор Product, который принимает параметры name и price, сохраните их как
свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount,
который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount
не должен быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип
(как объект transport в уроке). 
*/
"use strict";

// в стиле es5
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscoun = function () {
    return this.price - ((this.price / 100) * 25);
}

let apple = new Product('яблоко', 750);
console.log(`Товар: "${apple.name}" Стоимость: ${apple.price} / без скидки`);
console.log(`Товар: "${apple.name}" Стоимость: ${apple.make25PercentDiscoun()} / скидка 25%`);