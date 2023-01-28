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
// console.log(slicedName);




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
// НАПИШІТЬ ПРОГРАМУ, ЯКА БУДЕ ВИЗНАЧАТИ ДОВЖИНУ ІМЕНІ ,
//  ЯКЩО ІМЯ БІЛЬШЕ 7 СИМВОЛІВ, КОНСОЛЬ ВИВОДИТЬ "Wow, you  have a REALLY long name!", ЯКЩО МЕНШЕ 7
// "Your name isn't very long"

// const name = prompt("Ваше ім'я");
// const lengthName = name.length;
// if (lengthName >= 7) {
//     console.log("Wow, you  have a REALLY long name!");
// } else { console.log("Your name isn't very long"); }





// ЗАДАЧА 11
// Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"
// const message = prompt("яка офіційна назвва JavaScript ?");
// const newMessage = message.toLowerCase();
// // console.log(newMessage);
// const condition = "ECMAScript";
// const newCondition = condition.toLowerCase();
// // console.log(newCondition);
// if (newMessage === newCondition) {
//     result = alert("Вірно");
// } else { result = alert("Не знаєте? ECMAScript!"); }


// ЗАДАЧА 12
// Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const number = (prompt("Введіть число"));
// const hours = Number.parseInt(number / 60);
// const minutes = number % 60;
// let newHours = hours.toString();
// let newMinutes = minutes.toString();
// if (newHours.length === 1) {
//     newHours = '0' + newHours;
// }
// if (newMinutes.length === 1) {
//     newMinutes = '0' + newMinutes;
// }

// console.log(newHours);
// console.log(newMinutes);
// console.log(`${newHours}:${newMinutes}`);






// ЗАДАЧА 13
//При помощи цикла for додайте все четные числа от   min до max
// const minNumber = Number(prompt("Введідь мінімальне чсло"));
// const maxNumber = Number(prompt("Введіть максимальне число"));
// let sum = 0;

// for (i = minNumber; i <= maxNumber; i += 1) {
//      if (i % 2 === 0) {
//          sum += i;
//          console.log(i);
//      } else { continue; }
// }
// console.log(sum);




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


// const login = prompt("Введіть Ваш логін:");
// console.log(login);
// let parol;
// if (login === "Адмін") {
//     parol = prompt("Введіть Ваш пароль:");
//     if (parol === "Я головний") {
//     console.log("Привіт!");
// } else { console.log("Невірний пароль"); }

// } else if (login === "") {
//     console.log("Відміна");
// } else { console.log("Я Вас не знаю");}



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

// let total = 0;
// let number = (prompt("Введіть число:"));
// while (number !== null) {
//     total += Number(number);

//   number = (prompt("Введіть число:"));

// }
// console.log(total);




// ЗАДАЧА 16
//  В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа попадает
// это число(в первую, вторую, третью или четвертую).

// const min = Number(prompt("Введіть число від 1 до 59"));
// if (min >= 0 && min <= 15) {
//   console.log("перша чверть");
//   } else if (min >= 16 && min <= 30){
//   console.log("друга чверть");
//   } else if (min >= 31 && min <= 45) {
//   console.log("третя чверть");
//   } else if (min >= 46 && min <= 59)
//   console.log("четверта чверть");
//     else {console.log("Ви ввели невірне число"); }

// ЗАДАЧА 17

//  В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа попадает
// это число(в первую, вторую, третью или четвертую).


// ЗАДАЧА 18

// Дана строка, состоящая из символов, например, 'abcde'.
// Проверьте, что первым символом этой строки является буква 'a'.
// Если это так - выведите 'да', в противном случае выведите 'нет'.

// const string = prompt("Введіть рядок:");
// if (string[0] === "a") {
//   console.log("так");
// } else { console.log("ні"); }




// const message = prompt("введіть слова ")
// const price = 10;
// const string = message.split(" ");
// // console.log(string);
// const length = string.length;
// console.log(length);
// const totalPrice = length * price;
// console.log(totalPrice);
// // for (i = string[0]; i <= length - 1; i += 1){

// // }

// 14 автоперевірка
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(2, fruits.length);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// 15 автоперевірка
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);
// console.log(allClients);

// 16 автоперевірка


// const firstArray = ["Mango"];
// const secondArray =  ["Ajax", "Chelsea", "Poly", "Houston"];
// const maxLength = 3;
// let newArray = '';

// const thirdArray = firstArray.concat(secondArray);
// const lengthThirdArray = thirdArray.length;

// if (lengthThirdArray >= maxLength) {
//   newArray = thirdArray.slice(0, maxLength);
// } else { newArray = thirdArray; }
// console.log(newArray);

// 18 автоперевірка
// const number = 3;
// let total = 0;
//   for (let i = 1; i <= number; i += 1){
//     total +=i;
//   }

// console.log(total);

// 19 автоперевірка
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i <= fruits.length-1; i +=1) { // Change this line
//   const fruit = fruits[i];
//   // Change this line
//   console.log(fruit);
// }

// 20 автоперевірка
// const order = [2, 4, 5, 12];
// let total = 0;
// for (let i = 0; i < order.length; i += 1) {
//     console.log(order[i]);
//     total += order[i];
// }
// console.log('Total:', total);

// 21 автоперевірка
// const string = ('The quick brown fox jumped over the lazy dog');
// const newArray = string.split(' ');
// let  maxLength = newArray[0];
// for (let i = 1; i < newArray.length; i += 1){
//     if (maxLength.length < newArray[i].length) {
//         maxLength = newArray[i];
//     }
// }
// console.log(maxLength);


// 22 автоперевірка
// const min = 5;
// const max = 10;
// const numbers = [];

// for (let i = min; i <= max; i +=1) {
//     numbers.push(i);
//   }
//  console.log(numbers);

// 23 автоперевірка

// const array = [12, 24, 8, 41, 76];
// const value = 38;
// const newArray = [];
// for (let i = 0; i < array.length; i += 1) {
//     if (array[i] > value) {

//         newArray.push(array[i]);
//     }
//     // console.log(array[i]);
// }
// console.log(newArray);


// 24 автоперевірка
// const array1 = [2, 5, 4, 8, 9];
// const array2 = [5, 8, 2, 1, 3];
// const joint = [];

// for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//         joint.push(array1[i]);
//        }
// }
// console.log(joint);


// 29 автоперевірка
// const start = 3;
// const end = 36;
// const sum = 0;
//   const array = [];
//   for (let i = start; i <= end; i += 1)  {
//     if (i % 2 === 0) {
//       array.push(i);
//     }
// }
// console.log(array);

// 32 автоперевірка

// const array = [2, 8, 4, 45, 12, 24];
// const value = 4;
// let boolean = false;
// for (let i = 0; i < array.length; i += 1){

//     if (array[i] === value) {
//        boolean = true;
//         break;
//     }
//     else { boolean = false; }

// }
// console.log(boolean);


// modul 3
// автоперевірка 4

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);
// // Change code above this line

// автоперевірка 8

// {
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
// };
// console.log(name);
// console.log(price);
// console.log(image);
// console.log(tags);
// }


// автоперевірка 10

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);

// }
// console.log(keys);

// for (const key in apartment){
//   values.push(apartment[key]);
// }
//   console.log(values);

// автоперевірка 12
// // function countProps(object) {

//   let propCount = 0;
//   // Change code below this line
// for (const key in object){
//   if (object.hasOwnProperty(key)){
//     propCount += 1;
//   }
// }
//   // Change code above this line
// //   return propCount;
// // }


// автоперевірка 13

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (const value of keys) {
//   values.push(apartment[value]);

// }
// console.log(values);

// console.log(keys);
// console.log(values);

// автоперевірка 14
//   const object = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
//   const propCount = Object.keys(object).length;
//   console.log(propCount);

// автоперевірка 16
//   const salaries = {
//   descr: 345,
//   rating: 47,
//   price: 2153,
// };
//   let totalSalary = 0;

//     const arrayValues = Object.values(salaries);
//     for (let value of arrayValues ) {
//       totalSalary += value;
//     }
// console.log(totalSalary);

// автоперевірка 17
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (let color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// автоперевірка 18
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// const productName = "Scann";
// let result = null;
// for (let product of products) {
//   if (product.name === productName) {
//     console.log(product.price);
//   }
// }

// автоперевірка 19
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// const propName = 'quantityv';
// const arrayResult = [];

// for (let product of products) {
//   if (propName === 'name') {
//     arrayResult.push(product.name);
//   } else if (propName === 'price') {
//     arrayResult.push(product.price);
//   } else if (propName === 'quantity') {
//     arrayResult.push(product.quantity);
//   }
// }

// console.log(arrayResult);

// автоперевірка 20
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// let costProduct = 0;
// const productName = "Radar";

// for (const product of products) {
//   if (product.name === productName) {
//     costProduct = (product.price * product.quantity);
//   }
// }
// console.log(costProduct);


// автоперевірка 24
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//   const {hex, rgb} = color;
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// автоперевірка 26
// const forecast = {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }

//  const {today:
//          {low : todayLow,
//           high : todayHigh },
//         tomorrow :
//          { low : tomorrowLow,
//          high : tomorrowHigh },} = forecast;
// console.log(forecast);

// автоперевірка 28

// const scores = [89, 64, 42, 17, 93, 51, 26];

// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

// автоперевірка 30
function makeTask(data) {
    const completed = false;
    const category = "General";
    const priority = "Normal";
    // Change code below this line
    const { category = "General", priority = "Normal", completed } = data;
    console.log(data);
}
// makeTask({});