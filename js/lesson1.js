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
    