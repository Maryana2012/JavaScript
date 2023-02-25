// ------------------------Homework LESSON 1---------------------------

// ЗАДАЧА 10
// НАПИШІТЬ ПРОГРАМУ, ЯКА БУДЕ ВИЗНАЧАТИ ДОВЖИНУ ІМЕНІ ,
//  ЯКЩО ІМЯ БІЛЬШЕ 7 СИМВОЛІВ, КОНСОЛЬ ВИВОДИТЬ "Wow, you  have a REALLY long name!", ЯКЩО МЕНШЕ 7
// "Your name isn't very long"

// const name = prompt("Ваше ім'я");
// const lengthName = name.length;
// if (lengthName >= 7) {
//     console.log("Wow, you  have a REALLY long name!");
// } else { console.log("Your name isn't very long"); }

// -------------------------------------------------------------------------------------
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

// -------------------------------------------------------------------------------------
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

// =-------------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------------------
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


// --------------------------------------------------------------------------------------
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



// --------------------------------------------------------------------------------------------------
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


// ---------------------------------------------------------------------------
// ЗАДАЧА 17
//  В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа попадает
// это число(в первую, вторую, третью или четвертую).

// ------------------------------------------------------------------------------
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



// ------------------------Homework LESSON 2---------------------------

// ЗАДАЧА 8
// Напишіть ф-цію capitalize , яка буде приймати рядок і буде
// повертати новий рядок , де кожне слово буде з великої букви
// capitalize('the quick brown fox')// 'The Quick Brown Fox '


// function capitalize(string) {

//   const elementsArray = string.split(' ');
//   const newElementArray = [];
 
//   for (const element of elementsArray) {
    
//     firstElement = element[0].toUpperCase();

//     let newElement = firstElement;

//     for (let i = 1; i < element.length; i += 1){

//       newElement += element[i];
//       }
    
//     newElementArray.push(newElement);
//   }
//   const newString = newElementArray.join(' ');
  
//   console.log(newString);
//   return newString;
// }
// capitalize('the quick brown fox');

// --------------------------------------------------------------------------------------
// ЗАДАЧА 9
// Напишіть функцію для роботи з колекцією навчаючих курсів courses:

// addCourse(name) - добавляє курс у кінець колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName)- змінює імя на нове
// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];


// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// // добавляє курс у кінець колекції
// function addCourse(name) {
  
//   if (courses.includes(name)) {
//     console.log('У вас уже є такий курс');
//   } else {
//     courses.push(name);
//     console.log(courses);
//   }
//   return courses;
// }

// // видаляє курс із колекції
// function removeCourse(name) {
  
//   if (courses.includes(name)) {
    
//     const index = courses.indexOf(name);
//     courses.splice(index, 1);
//     console.log(courses);
//     return courses;
    
//   } else
//   {
//     return console.log('Курс з таким іменем не найдено');
//   }
  // }

// // змінює імя на нове
// function updateCourse(oldName, newName) {
//   if (courses.includes(oldName)) {
//     const index = courses.indexOf(oldName);
//     courses.splice(index, 1, newName);
//     console.log(courses);
//     return courses;
//   } else {
//     return console.log("такого курсу немає");
//   }
// }


// addCourse('Express'); //
// // addCourse("CSS"); // 'У вас уже є такий курс'
// removeCourse("React"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// // removeCourse("Vue"); // 'Курс з таким іменем не найдено'
// updateCourse("Express", "NestJS"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// // console.log(courses);




// --------------------------------------------------------------------------------------------
//10. Напиши скрипт, который для объекта user,
//последовательно:
//1 добавит поле mood со значением 'happy'
//2 заменит hobby на 'skydiving'
//3 заменит значение premium на false
//4 выводит содержимое объекта users в фортмате
//ключ:значение используя Object.keys() и for...of


// const user = {
//   nickname : 'Maryana',
//   age: 37,
//   hobby: 'reading',
//   premium: true,
//   }
  
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//       console.log(key, ":", user[key]);
// }
  
// ---------------------------------------------------------
//11. У нас есть объект, в котором храняться зарплаты
//нашей команды
//Напишите код для сумирования всех зарплат и
//сохраните его результат в переменной sum.
//Если объект salaries пуст, то результат должен быть 0


//----------------------------------------------------------
//12. Напишите ф-цию calcTotalPrice(stones, stonesName),
//которая принимает массив объектов и
//строку с названием камня.
//Функция считает м возвращает общую стоимость камней
//с таким именем, ценой и количеством из объекта
// const stones = [
// {name : "almas", price : 200, quantity : 5 },
// {name : "topas", price : 150, quantity : 10 },
// {name : "rubin", price : 85, quantity : 25 },
// ]

// function calcTotalPrice(stones, stonesName) {
//   let sum = 0;
  
//   for (const stone of stones) {
//     if (stone.name === stonesName) {
//       sum = stone.price * stone.quantity;
//       console.log(sum);
//     }
//   }
// }
   
// calcTotalPrice(stones, "topas");

// -----------------------------------------------------------------



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


// const calculator = {
//   read(a,b) {
//     this.firstEl = a;
//     this.secondEl = b;
//     console.log(this);
//     // return (this);
// },
//   sum() {
//     const sumEl = (this.firstEl + this.secondEl);
//     console.log(sumEl);
//     return this.sumEl;
//   },
//   mult() {
//     const multEl = (this.firstEl * this.secondEl);
//     console.log(multEl);
//     return this.multEl;
//   }
// }


// calculator.read(7, 8);
// calculator.sum(7, 8);
// calculator.mult(7, 8);

// -----------------------------------------------------------

//14. Напишите функцию updateObject, которая принимает объект и возвращает
//новый объект без указанного параметра
//Ожидаемый результат ({a: 1. b: 2}, 'b') => {a: 1}

// const numbers = { a: 1, b: 4, c: 8}

// function updateObject(numbers, nameNumber) {
//   const keys = Object.keys(numbers);
  
//   for (const key of keys) {
//     if (key === nameNumber) {
//       Reflect.deleteProperty(numbers, nameNumber);
     
//     }
//   else { console.log('такої властивості немає'); }
//   }
//   console.log(numbers);
// }
// updateObject(numbers, 't');

// --------------------------------------------------------------------------------------------

//15Напишите функцию updateObject, которая принимает объект и возвращает
//новый объект без указанных параметров
//Ожидаемый результат ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}




//16. Напишите функцию, которая принимает как параметр объект
//и формирует объекты в новом массиве в формате [key, value]

// const object = { a: 7, b: 6, c: 9 };



// function newArray(object) {
//   let array = [];
// const keys = Object.keys(object);
// const values = Object.values(object);
//   for (let i = 0; i < keys.length; i += 1) {
//     // array = [];
//     array.push(keys[i]);
//     array.push(values[i])
//   }
  
//   console.log(array);
// }
// newArray(object);





    


// ------------------------LESSON 3----------------------------------------------------

// ЗАДАЧА 1
// 1) Напишіть ф - ю конструктор яка створює обєкт person з такимим ключами:
// const Person = {
//   firstName,
//   lastName,
//   age,
//   gender,
//   interest,
//   bio() {
//     // виводить рядок Привіт {імя} мені {вік} років. Мені подобається {інтерес}
//   },
//   greeting() {
//     // Привіт, я {імя}
//   },
// };
// const user = new Person(
//     "Den",
//    "Dounot",
//     40,
//     "male",
//    "React",
//   );

// --------------Виконання-------------------------------------------------------
// const Person = function ({ firstName, lastName, age, gender, interest } = {}) {
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.age = age,
//     this.gender = gender,
//     this.interest = interest
// }
        
//    Person.prototype.bio = function() {
//         console.log(`Привіт ${this.firstName} мені ${this.age} років. Мені подобається ${this.interest} `);
//     }

//    Person.prototype.greeting = function() {
//         console.log(`Привіт, я ${this.firstName}`);
//     }


// const user = new Person({
//     firstName: "Den",
//     lastName: "Dounot",
//     age: 40,
//     gender: "male",
//     interest: "React",
// }
//   );
// console.log(user);
// user.bio();
// user.greeting();



// ЗАДАЧА 2
// Напишіть клас User для створення користувача з наступними властивостями:
// username - імя, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.
// Добавте метод getInfo(), який повертає рядок:
// User ${ імя } is ${ вік } years old and has ${ кількість постів } posts.

// ----------------Виконання--------------------------------------------------------------
// class User {
//     constructor ({userName, age, numberOfPosts} = {}) {
//         this.userName = userName,
//         this.age = age,
//         this.numberOfPosts = numberOfPosts
//     }
//     getInfo() {
//        console.log(`User ${ this.userName } is ${ this.age } years old and has ${ this.numberOfPosts } posts `);
//    }
// }
// const userFirst = new User({
//     userName: 'Maryana',
//     age: 37,
//     numberOfPosts: 52
// })
// console.log(userFirst);
// userFirst.getInfo();


// ЗАДАЧА 3
// Напиши клас Storage який створює об'єкти керувати складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items.
// Добавте методи класу:

// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар та додає його до поточних.
// removeItem(item) - отримає товар і, якщо він є, видаляє його з поточних.

// ----------------------------Виконання-------------------------------------------------------------------
// class Storage {
//     constructor([...arg]) {
//         this.item = arg
//     }
//     getItems() {
//         console.log(this.item);
//     }
//     addItem(newItem) {
//         this.item.push(newItem);
//     }
//     removeItem(remItem) {
//         const indexEl = this.item.indexOf(remItem);
//         this.item.splice(indexEl, 1);
//     }
// }
// const items = new Storage(["Виноград", "Банани", "Кокоси", "Ківі"]);

// items.getItems();
// items.addItem("Манго");
// console.log(items);
// items.removeItem("Ківі");
// console.log(items);




// ЗАДАЧА 4
// Напиши клас Client який створює об'єкт із властивостями login і email.
// Оголоси приватні властивості #login і #email, доступ до яких зроби через геттер та сеттер login і email.

// --------------------------Виконання-------------------------------------------------------------
// class Client {
//     #login;
//     #email;
//     constructor({ login, email } = {}) {
//         this.#login = login,
//         this. #email = email
//     }
//     get login() {
//         return this.#login;
//     }
//     set login(newLogin) {
//         this.#login = newLogin;
//     }
//     get email() {
//         return this.#email;
//     }
//     set email(newEmail) {
//         this.#email = newEmail;
//     }

// }

// const clientNew = new Client({
//     login: 121212,
//     email: 'maryanag@mail.com',
// })

// console.log(clientNew);
// console.log('login:', clientNew.login);
// console.log('newLogin:', clientNew.login = 141414);
// console.log('email:', clientNew.email);
// console.log('newEmail:', clientNew.email = 'sobasevska@gmail.com');

// --------------------------------------------------------------------------------


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


//     const objTransaction = {
//       amount: 0,
//       type: '',
//       id: 1,
//     }
    
    
//     const account = {
//       balance: 0,
//       transactions: [],
      
//       createBalance(amount, type) {
            
//         if (type === "deposit") {
//           return this.balance += amount;
          
//        } else if (type === 'withdraw') {
//           return this.balance -= amount;
          
//        } else return ('Невірна операція');
    
//   }
// }
//      function createTransaction(type, amount) {
    
//       const newObj = Object.create(objTransaction);
//             newObj.amount = amount ;
//             newObj.type = type;
//             newObj.id = Date.now();
       
//       if ((type === "deposit") || (type === "withdraw")) {
//          account.transactions.push(newObj);
  
//       } else { return console.log('Невірна операція'); }
  
//   return account;

// }
 
// account.createBalance(500, "deposit");
// account.createBalance(100, "withdraw");
// account.createBalance(1000, "deposit");
    
// createTransaction("deposit", 500);
// createTransaction("withdraw", 100);
// createTransaction("deposit", 1000);
// console.log(account);

// -----------------------------------------------
// debugger
// let newNumbers = [];
// const string = ('-5 8 54 11 7');
// for (let i = 0; i < string.length; i += 1){
//   let number = Number.parseInt(string);
//   newNumbers.push(number);
//   // number = 0;

//   console.log(number);
// }

// debugger
// -----------------------------
// повернути довжину найкоротшого слова у рядку
// const string = ("bitcoin take over the world maybe who knows perhaps");
// const newString = string.split(' ');
// console.log(newString);
// let minLengthEl = newString[0];

// for (let i = 0; i < newString.length; i += 1) {
//   if (newString[i].length < minLengthEl.length) {
//     minLengthEl = newString[i];
//     }
  
// }
// const minLength = minLengthEl.length;
// console.log(minLengthEl);
// console.log(`довжина найкоротшого слова ${minLength}`);


// ----------------------------------------------------------------
// знайти в рядку найбільше число
// const string = ('-9 45 85 32 17 0');
// const newString = string.split(' ');
// // console.log(newString);
// let maxNumber = newString[0];

// for (let i = 0; i < newString.length; i += 1){
//   if (newString[i] > maxNumber) {
//     maxNumber = newString[i];
//   }
// }
// console.log(maxNumber);

// -----------------------------------------------------------------------
// Create a function that checks if a number n is divisible by two numbers x AND y.
//  All inputs are positive, non - zero numbers.
// debugger
// function divide(n, x, y) {

//   if ((n % x) === 0 && (n % y) === 0) {
//     return true;
//   } else { return false}

//   }
// console.log(divide(3,1,1));

// -----------------------------------------------------------
// Повертає кількість (кількість) голосних у заданому рядку.
// Ми розглядатимемо a, e, i, o, u uяк голосні для цієї ката (але не y).
// Рядок введення складатиметься лише з малих літер та/або пробілів.
// debugger
// function getCount(str) {
//   let acc = 0;
//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
//       acc += 1;
//     }
//   }
//   return acc;
// }

// console.log(getCount('o a kak ushakov lil vo kashu kakao'));

// -------------------------------------------------------------
// Завершіть розв’язання так, щоб воно повертало true, якщо перший переданий аргумент (рядок) закінчувався другим аргументом (також рядком).
// function solution(str, ending){
//   const isEnd = str.endsWith(ending);
//   if (isEnd) {
//     return true;
//   } else { return false; }

// }
// console.log(solution('abcde', 'abc'));

// ------------------------------------------------------------------------
// Ваша мета в цій ката — реалізувати різницеву функцію, яка віднімає один список з іншого та повертає результат.
// Він повинен видалити всі значення зі списку a, які присутні в списку, b зберігаючи їх порядок.
// arrayDiff([1,2],[1]) == [2]
// debugger


// function minus(a, b) {
//   for (let i = 0; i < a.length; i += 1) {
//     for (let j = 0; j < b.length; j += 1){
//       let index = a.indexOf(b[j]);
//       if (index >= 0) {
//         newArray = a.splice(index, 1);
//       }
      
//     }
//   }
//   return a;
// }
// console.log(minus([1,2,3], [1,2]));
// console.log(minus([1, 2], [1]));
// console.log(minus([1,2,2], [1]));
// console.log(minus([1, 2, 3], [1, 2]));

// console.log(minus([1, 2, 3, 2], [2]));
// console.log(minus([1,2,2], [1]));

// -------------------------------------------------------------------------
// Ви, мабуть, знаєте систему «лайків» із Facebook та інших сторінок. Люди можуть "лайкати" дописи в блогах, зображення чи інші елементи. Ми хочемо створити текст, який має відображатися поруч із таким елементом.

// Реалізуйте функцію, яка приймає масив, що містить імена людей, яким подобається предмет. Він повинен повертати відображуваний текст, як показано в прикладах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// debugger
// function likes(array) {
//   const arrayLength = array.length;
   
//     if (arrayLength === 0) {
//       return ( `no one like this`);
//     } else if (arrayLength === 1) {
//       return (`${array[0]} like this`);
//     } else if (arrayLength === 2) {
//       return (`${array[0]} and ${array[1]} like this`);
//     } else if (arrayLength === 3) {
//       return (`${array[0]}, ${array[1]} and ${array[2]} like this`);
//     } else if (arrayLength > 3) {
//       const others = arrayLength - 2;
//       return (`${array[0]}, ${array[1]} and ${others} others like this`);
//     }
//     }
  
// console.log(likes([]));
// console.log(likes(['Peter']));
// console.log(likes(['Jacob', 'Alex']));
// console.log(likes(['Max', 'John', 'Mark']));
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));


// ---------------------------------------------------------------------------
// Ваше завдання — написати функцію maskify, яка змінює всі символи, крім останніх чотирьох, на '#'.
// Приклади
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""
// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

// debugger
// function maskify(cc) {
//   let newString = '';

//   for (let i = 0; i < cc.length; i += 1){
//     if ((i !== (cc.length - 1)) && (i !== (cc.length - 2)) && (i !== (cc.length - 3)) && (i !== (cc.length - 4))) {
//       // newString = cc.replace(cc[i], '#');
//       newString += '#';
//     } else { newString += cc[i]; }
//   }
//   return newString;
// }
// console.log(maskify('4556364607935616'));
// console.log(maskify('1'));
// console.log(maskify('11111'));
// console.log(maskify('4fvavd'));

// ---------------------------------------------------------------------------
// Крокетний клуб Western Suburbs має дві категорії членства: старше та відкрите. Їм потрібна ваша допомога з аплікаційною формою, у якій потенційним членам буде вказано, до якої категорії вони будуть призначені.
// Щоб бути старшим, член повинен бути не менше 55 років і мати гандикап більше 7. У цьому крокетному клубі гандикап коливається від -2 до +26; чим кращий гравець, тим нижчий гандикап.
// Введення
// Вхідні дані складатимуться зі списку пар. Кожна пара містить інформацію про одного потенційного члена. Інформація складається з цілого числа для віку людини та цілого числа для вади людини.
// Вихід
// Вихідні дані складатимуться зі списку рядкових значень (у Haskell та C: Openабо Senior), які вказуватимуть, чи слід помістити відповідного члена у старшу чи відкриту категорію.
// приклад
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// debugger
// function openOrSenior(data) {
//   const status = [];
//   let subArray = [];
//   for (let i = 0; i < data.length; i += 1){
//     subArray = data[i];
//     if ((subArray[0] >= 55) && (subArray[1] > 7)) {
//       status.push('Senior');
//     } else {status.push('Open');}
//     // console.log(subArray);
//     // console.log(data[i]);
//   }
//   return status;
// }
// console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]));
// -----------------------------------------------------------------------------------
// Створіть програму, яка фільтрує список рядків і повертає список лише з іменем ваших друзів.
// Якщо в імені рівно 4 літери, будьте впевнені, це має бути ваш друг! В іншому випадку ви можете бути впевнені, що він не...
// Приклад: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// тобто
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Примітка: збережіть оригінальний порядок імен у виводі.
// debugger
// function friend(friends){
//   const itIsFriend = [];
//   for (let i = 0; i < friends.length; i += 1) {
//     let number = Number(friends[i]);
    
//       if (Number.isNaN(number)) {
//       if ((friends[i].length === 4) && (typeof (friends[i]) === 'string')) {

//         itIsFriend.push(friends[i])
//       }
//     }
//   }
//   return itIsFriend;
// }
// console.log(friend(["Ryan", "Kieran", "Mark"]));
// console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));
// console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]));
// console.log(friend(['Hell', 'Is', 'a', 'badd', 'word']));
// ------------------------------------------------------------------------------------------
// Перемістіть першу літеру кожного слова в кінець, а потім додайте «ай» у кінці слова. Залиште розділові знаки без змін.
// Приклади
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
// debugger

// function pigIt(str) {
  
//   let ayWord = '';
//   let ayString = '';
//   const newString = str.split(' ');
//   for (let i = 0; i < newString.length; i += 1) {
//     if (newString[i] === [a - zA - Z]) {
//       let word = newString[i];

//       let firstLetter = word + word[0];
//       let newWord = firstLetter.slice(1, firstLetter.length);
//       ayWord = newWord + "ay";
//       ayString += ayWord + ' ';
//       ayString.trim();
//     }
//   }
//   // const lastString = ayString.slice(0, ayString.length -1)

//   return ayString;
// }
// console.log(pigIt('Hello world !'));
// console.log(pigIt('Pig latin is cool'));
// debugger
// function pigIt(str) { 
//   const newStr = str.split(' ');
//   let newWord = '';
//   let newArray = [];
//   let ayWord = [];
// //  console.log(newStr);
//   for (let i = 0; i < newStr.length; i += 1){
//     newArray = [...newStr[i]];
//     // lastEl =
//       newArray.push(newArray[0]) 
//     // firstEl =
//       newArray.splice(0, 1);
//     ayWord = newArray + 'ay';
//     newWord += ayWord;
//     // lastWord = ayWord.join(',');
//     // for (let i = 0; i < newArray.length; i += 1){
//     //   let 
//     // }
   
//   }
//   return   newWord;
// }
// console.log(pigIt('Hello world'));