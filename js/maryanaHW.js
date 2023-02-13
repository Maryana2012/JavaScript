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

    
    const objTransaction = {
      amount: 0,
      type: '',
      id: 1,
    }
    
    
    const account = {
      balance: 0,
      transactions: [],
      
      createBalance(amount, type) {
            
        if (type === "deposit") {
          return this.balance += amount;
          
       } else if (type === 'withdraw') {
          return this.balance -= amount;
          
       } else return ('Невірна операція');
    
  }
}
     function createTransaction(type, amount) {
    
      const newObj = Object.create(objTransaction);
            newObj.amount = amount ;
            newObj.type = type;
            newObj.id = Date.now();
       
      if ((type === "deposit") || (type === "withdraw")) {
         account.transactions.push(newObj);
  
      } else { return console.log('Невірна операція'); }
  
  return account;

} 
 
account.createBalance(500, "deposit"); 
account.createBalance(100, "withdraw"); 
account.createBalance(1000, "deposit"); 
    
createTransaction("deposit", 500); 
createTransaction("withdraw", 100); 
createTransaction("deposit", 1000);
console.log(account);