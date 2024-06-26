/* 
1. Объясните почему код даёт именно такие результаты?
Подсказка. Чтобы лучше разобраться возьмите этот код и запустите в отладчике в
браузере со включенными точками остановки.

//пример 1
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2

//пример 2
d = b++;
alert(d); //ответ: 1

//пример 3
c = 2 + ++a;
alert(c); //ответ: 5

//пример 4
d = 2 + b++;
alert(d); //ответ: 4
alert(a); //3
alert(b); //3
*/

"use strict";

// Объявляем переменные, переменным a и b присваиваем значение 1.
let a = 1, b = 1, c, d;

//пример 1
c = ++a; // Мы знаем, что а == 1. C помощью префиксного инкремента увеличиваем значение переменной "a" на единицу т.е. "а" будет равно 2, получаем c = 2.
alert(c); // ответ: 2.

//пример 2
d = b++; // d == undefind. т.к. просто объявили эту переменную выше. Мы знаем, что b == 1. Т.к. у переменной "b" постфиксный инкремент, сначала присваиваем переменной "d" значение переменной "b", т.е. d = 1, а потом увеличиваем "b" на единицу.
alert(d); //ответ: 1.

//пример 3
c = 2 + ++a; // При помощи префиксного инкремента увеличиваем значение переменной "a" на единицу, "а" будет равно 3. Потом складываем 2 + 3, получаем c = 5.
alert(c); //ответ: 5.

//пример 4
d = 2 + b++; // Мы знаем, что b == 2. Т.к. у переменной "b" постфиксный инкремент, сначала складываем 2 + 2, получаем 4 и присваиваем значение в переменную "d", а потом увеличиваем "b" на единицу, получаем b == 3.
alert(d); //ответ: 4.
alert(a); //ответ: 3. Пояснение в предыдущем примере.
alert(b); //ответ: 3.