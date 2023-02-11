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
  


// addCourse("Express"); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse("CSS"); // 'У вас уже є такий курс'
// removeCourse("React"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse("Vue"); // 'Курс з таким іменем не найдено'
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
  
  //Каждая транзакция это объект со свойствами: id, type, amount
  
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
