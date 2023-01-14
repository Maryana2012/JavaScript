 //  Базовые оператори +,-,*,/
// Проверка сложения

// let a = "DEN ";
// let b = "UK";
// console.log(a + b); 


// let a = 3;
// let b = ' join'; 
// console.log(a + b);


// let a = true;
// let b = " join"; 
// console.log(a + b);

// let a = true; 
// let b = 12;
// console.log(a + b); 

// let a = true;
// let b = true;
// console.log(a + b); 

// let a = true;
// let b = "false";
// console.log(a + b);

// let a = 12;
// let b = null;
// console.log(a + b); 

// let a = undefined;
// let b = 10;
// console.log(a + b); 

// let a = undefined;
// let b = false;
// console.log(a + b); 

// let a = 6;
// let b = false;
// let c = "12";
// let d = 1;
// let result = a + d + c + b; 
// console.log(result);
// console.log(typeof (result));


// console.log(0.1 + 0.2 === 0.3);



// let name = 'Bob';
// let slicedName = name.slice(0, 2);




// Логічні оператори
//  Що виведе код ?

// console.log(true && 3); 

// console.log(false && 3); 

// console.log(true && 4 && "hello"); 

// console.log(true && 0 && "hello"); 

// console.log(true || 3); 

// console.log(true || 3 || 4); 

// console.log(true || false || 7); 

// console.log(null || 2 || undefined); 

// console.log(null || 2 && 3 || 4); 



//Визначення типу значення, оператор typeof

// const productName = 'Mango';
// const pricePerItem = 150;
// const isOnSale = false;
// const error = null;
// let quantity;


// console.log(typeof productName);
// console.log(typeof pricePerItem);
// console.log(typeof isOnSale);
// console.log(typeof error); 
// console.log(typeof quantity);

 
 
 // НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО
// РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35
// РОКІВ, Я ВИВЧАЮ JAVASCRIPT"

// const name = "Galuna";
// const age = 35;
// const hoby = "JAVASCRIPT";
// const message = `ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ${name}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ ${hoby}`;
// console.log(message);

// ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

// const name = prompt("Ваше ім'я?");
// const mail = prompt("Вкажіть Вашу пошту");
// const tel = prompt("Вкажіть Ваш номер телефону");
// const message = `КОРИСТУВАЧ ${name} ВИКОРИСТОВУЄ  ${mail} ПОЧТУ І ${tel} ТЕЛЕФОН`;
// console.log(message);

// ЗАДАЧА 3
// ПОРАХУЙТЕ СУМУ ТОВАРІВ У КОРЗИНІ . ПОТРІБНО ВВЕСТИ СУМУ 3-Х ТОВАРІВ І ПОРАХУВАТИ ЇХ СУМУ

// const price1 = Number(prompt("Вкажіть ціну першого товару"));
// const price2 = Number(prompt("Вкажіть ціну другого товару"));
// const price3 = Number(prompt("Вкажіть ціну третього товару"));
// const totalPrice = price1 + price2 + price3;
// console.log(totalPrice);

// ЗАДАЧА 4
// ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ: 
// "СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ 
// "НЕ ЗНАЄТЕ? 12"

// const year = Number(prompt("СКІЛЬКИ МІСЯЦІВ МАЄ РІК ?"));

// if (year === 12) {
//     console.log("вірно");
// } else {
//     console.log("не вірно");
// };

// ЗАДАЧА 5
// НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ОПРИДІЛЯТИМЕ ЧИ ЦІЛЕ ЦЕ ЧИСЛО, ЧИ НЕ ЦІЛЕ

// const number = Number(prompt(' Введіть число'));
// // if (number % 2 === 0) {
// //     console.log("парне число");
// // } else {
// //     console.log("не парне число");
// // }

// const result = number % 2 === 0 ? "парне число" : "не парне число";
// console.log(result);


// ЗАДАЧА 6
// НАПИШІТЬ ПРОГРАМУ , ДЕ МИ У КОРИСТОВАЧА ПИТАЄМОСЬ МІСЯЦЬ НАРОДЖЕННЯ, І ПОКАЗУЄМО У ЯКУ ПОРУ РОКУ ВІН НАРОДИВСЯ

// const month = Number(prompt("Вкажіть місяць вашого народження"));

// if (month === 12 || month === 1 || month === 2) {
//     console.log("Зима");
// } else if (month >= 3 && month <= 5) {
//     console.log("Весна");
// } else if (month >= 6 && month <= 8) {
//     console.log("Літо");
// } else if (month >= 9 && month <=11) {
//     console.log("Зима");
// } else {
//     console.log("Такого місяця не існує")
// }

// ЗАДАЧА 7
// НАПИШІТЬ ПРОГРАМУ, ЯКА ПРОВІРЯЄ ЛОГІН І ПАРОЛЬ, 
// І ВИВОДИТЬ ПРИВІТАННЯ - ЯКЩО ВСЕ ДОБРЕ, АБО ВИДАЄ ПОМИЛКУ , ЩО НЕ ВІРНИЙ ЛОГІН

// const login = "ivan@ukr.net";
// const pas = 54321;

// let userLogin = prompt("Ваш логін");
// let userPas = Number(prompt("Ваш пароль"));

// // if (login === userLogin && pas === userPas) {
// //     console.log ("Вхід дозволено")
// // } else {
// //     console.log ("Спробуй ще")
// // }

// let message = login === userLogin && pas === userPas ? "Вхід дозволено" : "Спробуй ще";
// console.log(message);



// ЗАДАЧА 8
// НАПИШІТЬ ПРОГРАМУ , ЯКА БУДЕ ЗАПИТУВАТИ У КОРИСТУВАЧА ПЕРІОД ПІДПИСКИ НА СЕРВІС ТА ПОКАЗУВАТИМЕ ЦІНУ ПІДПИСКИ(ВИКОРИСТАЙ IF..ELSE, ТА ПЕРЕПИШИ НА SWITCH)
// ЯКЩО ДЕНЬ - ціна 1.99
// ЯУЩО НЕДІЛЯ - ціна 5.99
// ЯКЩО МІСЯЦЬ - ціна 10.99
// ЯКЩО РІК - ціна 100.99

// const period = prompt("Який період підписки вам необхідний: день, тиждень, місяць або рік");

// if (period === 'день') {
//     console.log("ціна 1.99");
// } else if (period === 'тиждень') {
//     console.log("ціна 5.99");
// } else if (period === 'місяць') {
//     console.log("ціна 10.99");
// } else if (period === 'рік') {
//     console.log("ціна 100.99");
// } else {
//     console.log("такого періоду не існує");
// }

// switch (period) {
//     case 'день':
//         console.log("ціна 1.99");
//         break;

//     case 'тиждень':
//         console.log("ціна 5.99");
//         break;

//     case 'місяць':
//         console.log("ціна 10.99");
//         break;

//     case 'рік':
//         console.log("ціна 100.99");
//         break;

//     default:
//         console.log("такого періоду не існує");
// }


// ЗАДАЧА 9 
// НАПИШІТЬ ЦИКЛ FOR ЯКА БУДЕ ВИВОДИТИ У КОНСОЛЬ ЧИСЛА ЗА ЗРОСТАННЯМ ВІД MIN ДО MAX, 
// ПІСЛЯ ТОГО ЧИСЛА КРАТНІ 10


// const minNum = 12;
// const maxNum = 56;

// // for (let i = minNum; i <= maxNum; i += 1) {
// //     console.log(i);
// // }

// for (let i = minNum; i <= maxNum; i += 1) {
//     if (i % 10 === 0) {
//         console.log(i);
//     }
//     continue;
//     }    
    




// ЗАДАЧА 10 
// НАПИШІТЬ ПРОГРАМУ, ЯКА БУДЕ ВИЗНАЧАТИ ДОВЖИНУ ІМЕНІ , ЯКЩО ІМЯ БІЛЬШЕ 7 СИМВОЛІВ, КОНСОЛЬ ВИВОДИТЬ "Wow, you  have a REALLY long name!" , ЯКЩО МЕНШЕ 7 
// "Your name isn't very long"





// ЗАДАЧА 11
// Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// ЗАДАЧА 12
// Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10


// ЗАДАЧА 13
//При помощи цикла for додайте все четные числа от   min до max

// ЗАДАЧА 14
// Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести строку "Отменено"
//В противном случае вывести строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"


// ЗАДАЧА 15
// При загрузке страницы пользователю предлагается
//в prompt ввести число. Ввод добавляется к значению
//переменной total.
//Операция ввода числа продолжается до тех пор,
//пока пользователь не нажмет кнопку Cancel в prompt.
//После того как пользователь прекратил ввод нажав на
//кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
//Делать проверку,что пользователь ввел именно число,
//а не произвольный набор символов, не нужно.


// ЗАДАЧА 16
//  В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа попадает
// это число(в первую, вторую, третью или четвертую).


// ЗАДАЧА 17

//  В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа попадает
// это число(в первую, вторую, третью или четвертую).


// ЗАДАЧА 18

// Дана строка, состоящая из символов, например, 'abcde'.
// Проверьте, что первым символом этой строки является буква 'a'.
// Если это так - выведите 'да', в противном случае выведите 'нет'.




