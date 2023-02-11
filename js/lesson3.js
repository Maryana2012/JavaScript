// ЗАДАЧА 1
// Напишіт дві функції:
// letMeSeeYourName(callback) - запитує імя користувача , через prompt і викликає колбек функцію (callback)
// greet(name) - колбек , який приймає імя і логінує в консоль рядок  "Привіт" + імя

function letMeSeeYourName(callback) {
  const name = promt("Введіть ваше імʼя");
  callback(name);
}

function greet(name) {
  console.log(`Привіт ${name}`);
}

letMeSeeYourName(greet);
