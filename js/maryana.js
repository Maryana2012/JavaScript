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
