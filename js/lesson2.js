// ЗАДАЧА 1
// БАЗОВІ ОПЕРАЦІЇ З МАСИВОМ
// 1)створіть масив styles з елементами «Джаз» і «Блюз»
// 2)добавте «Рок-н-ролл» в кінець
// 3)замініть значення в середині на «Классика»
// 4)видаліть перший елемент і виведіть його в консоль
// 5)вставте «Рэп» і «Регги» на початок масиву

// МАСИВ ПО ХОДІ ВИПОВНЕННЯ ОПЕРАЦІЇ
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл
// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// styles.splice(1, 1, 'Классика');
// const firstEl = styles.shift();
// styles.unshift('Рэп', 'Регги');
// console.log(firstEl);
// console.log(styles);

// ЗАДАЧА 2
// Напишіть ф-цію logItems(array) , яка буде получати масив і використовуючи цикл for , який для кожного елемента масива буде виводити в консоль
// повідомлення у форматі <індекс елемента> та <значення елемента>.
// Номерація для кожного елемента масива ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// const arrayEl = ["Mango", "Poly", "Ajax"];

// function logItems(array) {
//   for (let i = 0; i < arrayEl.length; i += 1) {
//     console.log("Індекс елемента:", i, "Значення елемента:", arrayEl[i]);
//   }
// }

// logItems();

// ЗАДАЧА 3
// Напишіть код , який шукає саме найменше число в масиві
// 1) напишіть циклом for
// const numbers = [2, 17, 94, 1, 23, 37];
// 2) перепишіть функцією findSmallestNumber(numbers)
// // console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
// // console.log(findSmallestNumber([49, 4, 83, 7, 12]));

// function findSmallestNumber(numbers) {
//   let smallestNumber = numbers[0];

//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }

//   return smallestNumber;
// }

// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findSmallestNumber([49, 4, 83, 7, 12]));


// ЗАДАЧА 4
//  Провірте , чи являється рядок полідромом


// const str = "ротатор";//true
// const str = "Hello";//false

// const strNew = str.split('');
// console.log(strNew);

// strNew.reverse()

// let result = strNew.join("")
// console.log(str === result);

// let next = str.split('').reverse().join("");
// console.log(next === str);

// ЗАДАЧА 5
// Напишіть ф-цію calculateAverage() яка приймає довільну кількість аргументів і повертає їх середнє значення .Всі аргументи будуть тільки числовими

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36));// 23.2


// function calculateAverage() {
//     // console.log(arguments);

//     const numbers = Array.from(arguments);
//     // console.log(numbers);

//     let result = 0;
//     for (const number of numbers) {
//         result += number;
//     }
//     console.log(result)
//     const arrayLength = numbers.length;

//     console.log(arrayLength)

//     const midNumber = result / arrayLength;

//     return midNumber;
// }

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36));// 23.2

// ЗАДАЧА 6
// Напишіть ф-цію greet(name) , яка при виклику буде получати імя (як приклад , "Василь"), і логінувати рядок "Привіт, <імя>".У випадку , відсутнього
// відсутнього значення, виводе аргумент "Привіт , гість"


// function greet(name = "гість") {
//     return `Привіт ${name}`;
// }

// console.log(greet("Василь"));//Привіт Василь
// console.log(greet());//Привіт гість

// ЗАДАЧА 7
// Виконайте рефакторинг замінивши обявлення ф-ції з function declaration на function expression та на стрілочну функцію
// function checkNumbers(a, b) {
  
//   if (a > b) {
//     return `число ${a} більше ${b}`;
//   }

//   return `число ${b} більше ${a}`;}

// const checkNumbers = function (a, b) {
//       if (a > b) {
//     return `число ${a} більше ${b}`;
//   }

//   return `число ${b} більше ${a}`;
// }

// const checkNumbers = (a, b) => {

//     if (a > b) {
//     return `число ${a} більше ${b}`;
//   }

//   return `число ${b} більше ${a}`;

// }

// const checkNumbers = (a, b) => a > b ? `число ${a} більше ${b}` : `число ${b} більше ${a}`;



// ЗАДАЧА 2
// У вас є обєкт , у якому зберігаються зарплати нашої команди.
// Напишіть код , для підрахунку всіх зарплат і збережіть результат в змінні sum
// Повинно получитись 390, якщо обєкт salaries пустий , то результат буде 0
// ЩОБ МОЖНА БУЛО ПЕРЕВИКОРИСТОВУВАТИ ЛОГІКУ, ТОМУ ПИШЕМО ФУНКЦІЮ


//  const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
//  };
// const salarys = Object.values(salaries);
// let sum = 0;
// for (const salary of salarys) {
//     sum += salary;
// }
// console.log(sum);



// ЗАДАЧА 8
// Напишіть ф-цію capitalize , яка буде приймати рядок і буде 
// повертати новий рядок , де кожне слово буде з великої букви
// capitalize('the quick brown fox')// 'The Quick Brown Fox '


// ЗАДАЧА 9
// Напишіть функцію для роботи з колекцією навчаючих курсів courses:

// addCourse(name) - добавляє курс у кінець колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName)- змінює імя на нове
// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// addCourse("Express"); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse("CSS"); // 'У вас уже є такий курс'
// removeCourse("React"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse("Vue"); // 'Курс з таким іменем не найдено'
// updateCourse("Express", "NestJS"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// console.log(courses);

// 


//10. Напиши скрипт, который для объекта user,
//последовательно:
//1 добавит поле mood со значением 'happy'
//2 заменит hobby на 'skydiving'
//3 заменит значение premium на false
//4 выводит содержимое объекта users в фортмате
//ключ:значение используя Object.keys() и for...of



//11. У нас есть объект, в котором храняться зарплаты
//нашей команды
//Напишите код для сумирования всех зарплат и
//сохраните его результат в переменной sum.
//Если объект salaries пуст, то результат должен быть 0


//12. Напишите ф-цию calcTotalPrice(stones, stonesName),
//которая принимает массив объектов и
//строку с названием камня.
//Функция считает м возвращает общую стоимость камней
//с таким именем, ценой и количеством из объекта



//13. Создайте объект calculator с тремя методами
//read(a, b) - принимает два аргумента и сохраняет их
//как свойства объекта
//sum() возвращает сумму сохраненных значений
//mult() перемножает сохраненные значения и возвращает результат

// const calculator = {
//   read(a, b) {},
//   sum() {},
//   mult() {},
// };


//14. Напишите функцию updateObject, которая принимает объект и возвращает
//новый объект без указанного параметра
//Ожидаемый результат ({a: 1. b: 2}, 'b') => {a: 1}


//15Напишите функцию updateObject, которая принимает объект и возвращает
//новый объект без указанных параметров
//Ожидаемый результат ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}




//16. Напишите функцию, которая принимает как параметр объект
//и формирует объекты в новом массиве в формате [key, value]



//17. Напиши скрипт управления личным кабинетом интернет банка
//Есть объект account в котором необходимо реализовать
//методы для работы с балансом и историей транзакций

//Типов транзакций всего два.
//Можно положить либо снять деньги со счета
// const Transaction = {
//     DEPOSIT: "deposit",
//     WITHDRAW: "withdraw",
//   };
  
  //Каждая транзакция это объект со свойствамиЖ id, type, amount
  
//   const account = {
    //текущий баланс счёта
    // balance: 0,
  
    //История транзакций
    // transactions: [],
  
    //Метод создает и возвращает объект транзакций
    //Принимает сумму и тип транзакций
    // createTransaction(type, amount) {
    //   return {
    //     type,
    //     amount,
    //   };
    // },
  
    //Метод отвечающий за добавление суммы к балансу.
    //Принимает сумму транцакции.
  




// МОДУЛЬ 2-3

// ЩО КОНСОЛЬ ВИВЕДЕ НА ЕКРАН
// const roles = ["user", "tester", "admin"];
// console.log(roles[1]); 
// console.log(roles[0]); 
// console.log(roles[5]); 
// console.log(roles.length);
// console.log(roles[-1]);
// const lastIndex = roles.length - 1;
// console.log(roles[lastIndex]);

// const roles = ["user", "tester", "admin"];

// roles.pop();
// console.log(roles);

// const result = roles.push("support");
// console.log(roles); 

// roles.shift();
// console.log(roles);

// roles.unshift("manager");
// console.log(roles);




//ДАВАЙТЕ ПЕРЕВІРЕМО ОБЛАСТЬ ВИДИМОСТІ Ф-ЦІЇ

// 1)
// let a = 5;
// let b = 10;

// function sum() {
//   let a = 50;
//   let b = 100;

//   return a + b;
// }
// console.log(sum()); 


// 2)
// let a = 5;
// let b = 10;

// function sum() {
//   return a + b;
// }
// console.log(sum())


// 3)
// let a = 5;
// let b = 10;

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(100, 300))


// 4)
// let a = 5;
// let b = 10;

// function sum() {
//   let a = 10;

//   function sum2() {
//     let a = 30;
//     return a + b;
//   }

//   return a + b;
// }
// console.log(sum())

// 5)
// let a = 5;
// let b = 10;

// function sum() {
//   let a = sum2(); 

//   function sum2() {
//     let a = 30;
//     return a + b;
//   }

//   return a + b;
// }

// console.log(sum());
