/*
4. Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
    1. Получить все товары, у которых есть фотографии, можете использовать метод filter
    2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать
    метод sort
В первом пункте у вас должен получиться такой массив из двух элементов https://yadi.sk/i/9IBcmLEP6nId9w
Во втором пункте массив должен стать таким https://yadi.sk/i/-xKIq_prDx3Txg
*/

"use strict";

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let productsWithPhoto = products.filter(element => {
    return element.photos && element.photos.length > 0;
});

let sortProdPrice = products.sort(function (a, b) {
    if (a.price > b.price) {
        return 1;
    }

    if (a.price < b.price) {
        return -1;
    }

    return 0;
});

console.log(productsWithPhoto);
console.log(sortProdPrice);