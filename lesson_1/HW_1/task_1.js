/*
1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую
температуру в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле:
Tf = (9 / 5) * Tc + 32;
где Tf – температура по Фаренгейту, Tc – температура по Цельсию.
*/

let tc = +prompt("Задайте температуру в градусах по Цельсию: ");

let tf = (9 / 5) * tc + 32;

alert(`Температура по Цельсию: ${tc}\nТемпература по Фаренгейту: ${tf}`);