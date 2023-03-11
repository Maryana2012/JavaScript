"use strict"
//-------------------HOME WORK 4 --------------------//

// ЗАДАЧА
// ПОТРІБНО СТВОРИТИ Ф-ЦІЮ , ЯКА БУДЕ ШУКАТИ НАРЦИСА.
// ГОЛОВНА УМОВА НАРЦИСА ЗНАЮТЬ УСІ , НАРЦИС НЕ ЗНАЄ НІКОГО
// є елемент масиву , який незнає нікого
// якщо не одна така людина , то вертаємо not found
// якщо один , то перевірити , чи його знають усі люди, 
// якщо так то вертаємо found

// const people1 = [{
//   name: 'Alex',
//   know: ["Eva", "Jhon"],
// },
// {
//   name: 'Ivan',
//   know: ["Jhon", "Alex"],
// },
// {
//   name: 'Eva',
//   know: ["Alex", "Jhon"],
// },
// {
//   name: 'Jhon',
//   know: [],
// }]


// const people2 = [{
//   name: 'Alex',
//   know: ["Eva", "Jhon"],
// },
// {
//   name: 'Jhon',
//   know: ["Eva"],
// },
// {
//   name: 'Eva',
//   know: [],
// },
// {
//   name: 'Ivan',
//   know: ["Jhon", "Alex"],
// }]


// const people3 = [{
//   name: 'Alex',
//   know: ["Eva", "Jhon"],
// },
// {
//   name: 'Jhon',
//   know: [],
// },
// {
//   name: 'Eva',
//   know: ["Alex", "Jhon"],
// },
// {
//   name: 'Ivan',
//   know: ["Jhon", "Alex"],
// }]
// //  знаходжу людину без друзів (масив з об'єктом)
// const maybeNarcys = people3.filter(person => person.know.length === 0);
// //  знаходжу людей з друзями (масив з об'єктом)
// const isNotNarcys = people3.filter(person => person.know.length !== 0);
// // якщо не одна така людина , то вертаємо (повідомлення) not found
// // якщо ні то вертаємо (повідомлення) found
// function message(array, fun) {
//         if(maybeNarcys.length > 1){
//         console.log(maybeNarcys.length)
//         console.log('not found')
//         } else {
//         console.log('found')
// }}
// message(people3, maybeNarcys)
// // перевіряю, чи його знають усі люди


// console.log(maybeNarcys)
// console.log(isNotNarcys)
// console.log(...maybeNarcys.values())
// console.log(...isNotNarcys.values())


//-------------------HOME WORK 3 --------------------//

// ЗАДАЧА 1
// 1) Напишіть ф - ю конструктор яка створює обєкт person з такими ключами:
//     

//    const Person = function ({firstName, lastName, age, gender, interest} = {}) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.gender = gender;
//         this.interest = interest;
//     }  

// // виводить рядок Привіт {імя} мені {вік} років. Мені подобається {інтерес}
  
//      Person.prototype.bio = function() {
//      console.log(`Привіт ${this.firstName} мені ${this.age} років. Мені подобається ${this.interest}`)
// }
// // Привіт, я {імя}

//      Person.prototype.greeting = function() {
//         console.log(`Привіт, я ${this.firstName}`)
//      }
//     const user = new Person({
//         firstName: "Den",
//         lastName: "Dounot", 
//         age: 40,
//         gender: "male",
//         interest: "React",
//         });
    
//     console.log(user);
//     user.bio();
//     user.greeting();
 

// ЗАДАЧА 2
// Напишіть клас User для створення користувача з наступними властивостями:
// username - імя, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.
// Добавте метод getInfo(), який повертає рядок:
// User ${ імя } is ${ вік } years old and has ${ кількість постів } posts.


        // class User {
        //     constructor({username, age, numberOfPosts} = {}) {
        //        this.username = username;
        //        this.age = age;
        //        this.numberOfPosts = numberOfPosts;
        //     }
        //     getInfo() {
        //         console.log(`User ${this.username} is ${this.age} years old and has ${this.numberOfPosts} posts.`);
        //         return `User ${this.username} is ${this.age} years old and has ${this.numberOfPosts} posts.`
        //     }
        // }
        // console.log(User)
        // const unit = new User({
        //     username: 'Maksim',
        //     age: 22,
        //     numberOfPosts: 55,
        // });
        // console.log(unit)
        // unit.getInfo()


// ЗАДАЧА 3
// Напиши клас Storage який створює об'єкти керувати складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів, 
// і записуватиме його у властивість items.
// Добавте методи класу:
// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар та додає його до поточних.
// removeItem(item) - отримає товар і, якщо він є, видаляє його з поточних.


        // class Storage {
        //     constructor(items) {
        //     this.items = items;
        //     }
        //     getItems() {
        //         console.log(this.items);
        //         return this.items;
        //     }
        //     addItem(item) {
        //         this.items.push(item)
        //         console.log(this.items);
        //     }
        //     removeItem(item) {
        //         for (let i = 0; i <= this.items.length; i += 1) {
        //             if(this.items[i] === item) {
        //                 this.items.splice(i, 1);
        //                 console.log(this.items);
        //                 } 
        //             }
        //         } 
        //     }

        //  const items = new Storage(["Виноград", "Банани", "Кокоси", "Ківі"]);
        //  items.getItems();
        //  items.addItem("Манго");
        //  items.removeItem("Ківі");
        //  items.removeItem("Апельсин");


// ЗАДАЧА 4
// Напиши клас Client який створює об'єкт із властивостями login і email.
// Оголоси приватні властивості #login і #email, доступ до яких зроби 
// через геттер та сеттер login і email.


        //  class Client {
        //          #login;
        //          #email;
        //  constructor({login, email} = {}) { 
        //          this.#login = login;
        //          this.#email = email;
        //          }
        //  get login () {
        //          // console.log(this.#login);
        //          return this.#login;
        //          }
        //  set login (newLogin) {
        //          this.#login = newLogin;
        //          }
        //  get email () {
        //          // console.log(this.#email);
        //          return this.#email;
        //          }
        //  set email (newEmail) {
        //          this.#email = newEmail;
        //          }
        //  }
        //  const newClient = new Client({login: "start", email: "first_@ukr.net"});
        //  console.log(newClient);

        //  newClient.email = "second_@ukr.net";
        //  newClient.login = "finish";
        //  console.log(newClient);


//-------------------HOME WORK 2 --------------------//


// ЗАДАЧА 8
// Напишіть ф-цію capitalize , яка буде приймати рядок і буде 
// повертати новий рядок , де кожне слово буде з великої букви
// capitalize('the quick brown fox')// 'The Quick Brown Fox '


         // function capitalize(text) {
         // const arrayText = text.split(' ');
         // const newArrayText = [];

         // for (let word of arrayText) {
         //   const arrayWord = word.split('');
         //   const newArrayWord = [];

         //   for (let i = 0; i < word.length; i += 1) {
         //     if(word[i] === word[0]) {
         //       newArrayWord.push(word[0].toUpperCase())
         //     } else {
         //       newArrayWord.push(word[i])
         //   }
         // }
         // newArrayText.push(newArrayWord.join('')); 
         // } 
         // console.log(newArrayText.join(' '))
         // //  замість console.log має бути return
         // }

         // capitalize('the quick brown fox')
         // capitalize('я це зробив, але мені не подобається')


// ЗАДАЧА 9
// Напишіть функцію для роботи з колекцією навчаючих курсів courses:

// addCourse(name) - добавляє курс у кінець колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName)- змінює імя на нове



         // const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

         // function addCourse(name) {
         //   if(courses.includes(name)) {
         //     console.log('У вас уже є такий курс')
         //     } else {
         //       courses.push(name)
         //       console.log(courses)
         //       }
         // }
         // function removeCourse(name) {
         //     if(courses.includes(name)) {
         //       for (let i = 0; i < courses.length; i += 1) {
         //         if(courses[i] === name) {
         //           courses.splice(i, 1);
         //           console.log(courses)
         //         }}}
         //     else {
         //       console.log('Курс з таким іменем не знайдено')
         //       }
         // }
         // function updateCourse(oldName, newName) {
         //     for (let i = 0; i < courses.length; i += 1) {
         //       if(courses[i] === oldName) {
         //         courses.splice(i, 1, newName);
         //         console.log(courses)
         //       }}
         //       console.log(courses)
         // }
  
         // addCourse("CSS"); // 'У вас уже є такий курс'
         // removeCourse("React"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
         // removeCourse("Vue"); // 'Курс з таким іменем не найдено'
         // addCourse("Express"); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
         // updateCourse("Express", "NestJS"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
         // console.log(courses)


//10. Напиши скрипт, который для объекта user,
//последовательно:
//1 добавит поле mood со значением 'happy'
//2 заменит hobby на 'skydiving'
//3 заменит значение premium на false
//4 выводит содержимое объекта users в фортмате
//ключ:значение используя Object.keys() и for...of



         // ?????????????

         // const user = {
         //   hobby: "xyz",
         //   premium: true,
         // };


         // user.mood = 'happy';
         // user.hobby = 'skydiving';
         // user.premium = false;

         // console.log(user)



//11. У нас есть объект, в котором храняться зарплаты
//нашей команды
//Напишите код для сумирования всех зарплат и
//сохраните его результат в переменной sum.
//Если объект salaries пуст, то результат должен быть 0


         // const salaries = {
         //   Ivan: 1000,
         //   Sasha: 5000,
         //   Igor: 3003,
         //   Oleg: 2007,
                                    
         // };

         // const arraySalaries = Object.values(salaries);
         // console.log(arraySalaries)

         // let sum = 0;

         // for (const salary of arraySalaries) {
         //   sum += salary;
         // }

         // console.log(sum);



//12. Напишите ф-цию calcTotalPrice(stones, stonesName),
//которая принимает массив объектов и
//строку с названием камня.
//Функция считает и возвращает общую стоимость камней
//с таким именем, ценой и количеством из объекта


		 // const stones = [
         //   {name: 'stone4', price: 20, quantity: 3},
         //   {name: 'stone2', price: 7, quantity: 5},
         //   {name: 'stone1', price: 5, quantity: 9},
         //   {name: 'stone3', price: 13, quantity: 2}
         // ];
         // console.log(stones);

         // const stonesName = 'stone1';

         // let totalPrice = 0;

         // function calcTotalPrice(stones, stonesName) {
         //   for (let stone of stones) {
         //     if(stone.name === stonesName){
         //       totalPrice = stone.price * stone.quantity;
         //       console.log(totalPrice);
         //     }
         //   }
         // }

         // calcTotalPrice(stones, stonesName);



//13. Создайте объект calculator с тремя методами
//read(a, b) - принимает два аргумента и сохраняет их
//как свойства объекта
//sum() возвращает сумму сохраненных значений
//mult() перемножает сохраненные значения и возвращает результат


         // const calculator = {
         //   read(a, b) {
         //     this.argA = a;
         //     this.argB = b;
         //     console.log(this)
         //   },
         //   sum() {
         //     total = this.argA + this.argB;
         //     console.log(total);
         //   },
         //   mult() {
         //     multiply = this.argA * this.argB;
         //     console.log(multiply);
         //   },
         // };

         // calculator.read(9, 12);
         // calculator.sum();
         // calculator.mult();



//14. Напишите функцию updateObject, которая принимает объект и возвращает
//новый объект без указанного параметра
//Ожидаемый результат ({a: 1. b: 2}, 'b') => {a: 1}

// ???????????????????????????????????????????????????????????????


         // const obj1 = {
         //   a: 1,
         //   b: 2
         // };
         // console.log(obj1);

         // const arg1 = 'b';
         // console.log(arg1);

         // const test = Object.entries(obj1);
         // console.log(test);
            
         // function updateObject (obj1) {
         //   const newObj = {
         //   }
         // }



//15Напишите функцию updateObject, которая принимает объект и возвращает
//новый объект без указанных параметров
//Ожидаемый результат ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}

// ????????????????????????????????????????????????????????????????????????



//16. Напишите функцию, которая принимает как параметр объект
//и формирует объекты в новом массиве в формате [key, value]



         // const phones = {phone1: 'iphone', phone2: 'Sumsung', phone3: 'LG'};

         // function myFunction(obj) {
         //   const array = Object.entries(obj);
         //   console.log(array);
         // }

         // myFunction(phones);



//17. Напиши скрипт управления личным кабинетом интернет банка
//Есть объект account в котором необходимо реализовать
//методы для работы с балансом и историей транзакций

//Типов транзакций всего два.
//Можно положить либо снять деньги со счета
// const Transaction = {
//     DEPOSIT: "deposit",
//     WITHDRAW: "withdraw",
//   };
  

//   //Каждая транзакция это объект со свойствами: id, type, amount
  
//   const account = {
//        balance: 0,
//     transactions: [],
  
//     //Метод создает и возвращает объект транзакций
//     addTransaction(id, type, amount){
//       const transaction = {
//           type, 
//           amount,
//           id: Date.now()
//         }
//       }
//     }
//     //Принимает сумму и тип транзакций
//     createTransaction(type, amount) {
//       return {
//         type,
//         amount,
//       };
//     }
  
    //Метод отвечающий за добавление суммы к балансу.
    //Принимает сумму транцакции.


    //-------------------HOME WORK 1 --------------------//

// ЗАДАЧА 10 
// НАПИШІТЬ ПРОГРАМУ, ЯКА БУДЕ ВИЗНАЧАТИ ДОВЖИНУ ІМЕНІ , 
// ЯКЩО ІМЯ БІЛЬШЕ 7 СИМВОЛІВ, КОНСОЛЬ ВИВОДИТЬ 
// "Wow, you  have a REALLY long name!" , ЯКЩО МЕНШЕ 7 
// "Your name isn't very long"


         // function longName(name) {
         //   if (name.length > 7){
         //     console.log("Wow, you  have a REALLY long name!");
         //   } else {
         //     console.log("Your name isn't very long");
         //     }
         // }

         // longName('Oleksandr');
         // longName('Igor');
         // longName('Kateryna');


// ЗАДАЧА 11
// Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"


         // const nameJavaScript = prompt("Яка офіційна назва JavaScript?");
         // if(nameJavaScript === "ECMAScript") {
         //   alert("Вірно!");
         // } else {
         //   alert("Не знаєте? ECMAScript!")
         // }


// ЗАДАЧА 12
// Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10


         // const numberMinutes = Number(prompt('Введіть кількість хвилин'));
         // console.log(numberMinutes);
         // let hours = (Number.parseInt(numberMinutes / 60));
         // console.log(hours);
         // let minutes = (numberMinutes % 60);
         // console.log(minutes);
         // const message = `${hours}:${minutes}`
         // console.log(message);

// -----------------------------------------------------------як правильно вирішити 12 задачу?????

// ЗАДАЧА 13
//При помощи цикла for додайте все четные числа от   min до max


         // const numberMin = 4;
         // const numberMax = 15;
         // let total = 0;
         // for (let i = numberMin; i <= numberMax; i += 1){
         //     if (i % 2 === 0) {
         //       total += i;
         //       console.log("+:", i);
         //     }
         //     console.log("total", total);
         // }


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
//кнопку Cancel, показать alert со строкой 
// "Общая сумма введенных чисел равна [число]."
//Делать проверку,что пользователь ввел именно число,
//а не произвольный набор символов, не нужно.


         //  let total = 0;
        
         //  do {let number = prompt("Введіть число");
         //      console.log(number);
         //      total += number;
         //      console.log(total);
         //    } while (prompt().number !== null);
                            
        //    console.log(`Загальна сума введених чисел дорівнює [${total}]`);


// ЗАДАЧА 16
//  В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа попадает
// это число(в первую, вторую, третью или четвертую).


         // const min = prompt("Введіть число від 0 до 59 включно");

         // if (min >= 0 && min < 15) {
         //   console.log("Перша чверть години");
         // } else if (min >= 15 && min < 30) {
         //   console.log("Друга чверть години");
         // } else if (min >= 30 && min < 45) {
         //   console.log("Третя чверть години");
         // } else if (min >= 45 && min <= 59) {
         //   console.log("Четверта чверть години");
         // } else {
         //   console.log("Некоректно введено число");
         // }


// ЗАДАЧА 17

//  В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа попадает
// это число(в первую, вторую, третью или четвертую).


// ЗАДАЧА 18

// Дана строка, состоящая из символов, например, 'abcde'.
// Проверьте, что первым символом этой строки является буква 'a'.
// Если это так - выведите 'да', в противном случае выведите 'нет'.


         // const string = 'abcde';
         // const array = string.split("");
         // console.log(array);

         // for (let el of array){

         // if (el === "a") {
         //   console.log('Yes');
         //   break
         // }   
         // console.log('No');
         // } 
