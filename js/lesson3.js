// ЗАДАЧА 1
// Напишіт дві функції:
// letMeSeeYourName(callback) - запитує імя користувача , через prompt і викликає колбек функцію (callback)
// greet(name) - колбек , який приймає імя і логінує в консоль рядок  "Привіт" + імя

// function letMeSeeYourName(callback) {
//   const name = prompt("Введіть ваше імʼя");
//   callback(name);
// }

// function greet(name) {
//   // console.log(`Привіт ${name}`);
//   alert(name);
// }

// letMeSeeYourName(greet);



// ЗАДАЧА 2
// Напишіть дві функції:
// makeProduct(name, price, callback) -приймає імя та ціну товару, а також колбек.Функція створює обєкт товару, добавляє йому унікальний ідентифікатор, в значення id і викликає колбек, передаючи йому створений обєкт.
// showProduct(product) - колбек приймає обєкт продукта і логінує його в консоль;
// makeProduct("Холодильник", 10000, logger);

// const makeProduct = (name, price, callback) => {
//   const product = {
//     name,
//     price,
//     id: Date.now()
//   }
//   callback(product);
// }

// const showProduct = (product) => {
// console.log(product);
// }
// makeProduct("Холодильник", 10000, showProduct);


// ЗАДАЧА 3
// МАЄМО МАСИВ, ПОТРІБНО:
// 
// 2)порахувати загальну суму років скільки прожили вчені, 
// і визначити середнє значення;
// 3)відсортувати по алфавіту;
// 4)відсортувати по кількості прожитих років;
// 5)відфільтрувати, хто народився в 15,16,17ст;
// 6)знайти рік народження Albert Einstein;
// 7)визначити, чи усі вчені працювали у 19ст;
const scientists = [
    {
      name: "Albert",
      surname: "Einstein",
      born: 1879,
      dead: 1955,
      id: 1,
    },
    {
      name: "Isaac",
      surname: "Newton",
      born: 1643,
      dead: 1727,
      id: 2,
    },
    {
      name: "Galileo",
      surname: "Galilei",
      born: 1564,
      dead: 1642,
      id: 3,
    },
    {
      name: "Marie",
      surname: "Curie",
      born: 1867,
      dead: 1934,
      id: 4,
    },
    {
      name: "Johannes",
      surname: "Kepler",
      born: 1571,
      dead: 1630,
      id: 5,
    },
    {
      name: "Nicolaus",
      surname: "Copernicus",
      born: 1473,
      dead: 1543,
      id: 6,
    },
    {
      name: "Max",
      surname: "Planck",
      born: 1858,
      dead: 1947,
      id: 7,
    },
    {
      name: "Katherine",
      surname: "Blodgett",
      born: 1898,
      dead: 1979,
      id: 8,
    },
    {
      name: "Ada",
      surname: "Lovelace",
      born: 1815,
      dead: 1852,
      id: 9,
    },
  
    {
      name: "Lise",
      surname: "Meitner",
      born: 1878,
      dead: 1968,
      id: 11,
    },
    {
      name: "Sarah E.",
      surname: "Goode",
      born: 1855,
      dead: 1905,
      id: 10,
    },
    {
      name: "Hanna",
      surname: "Hammarström",
      born: 1829,
      dead: 1909,
      id: 12,
    },
  ];
// 1)получити масив вчених які народились у 19ст;

// let myScientist = scientists.filter((scientist) =>
// scientist.born >= 1800 && scientist.born < 1900).map((scientist) => `${scientist.name} ${scientist.surname}`)
// console.log(myScientist);

// 2)порахувати загальну суму років скільки прожили вчені, і визначити середнє значення;

// const totalEayrs = scientists.reduce((acc, scientist) => acc + (scientist.dead - scientist.born), 0);
// console.log(totalEayrs);

// console.log(totalEayrs / scientists.length);

// 3)відсортувати по алфавіту;

// const nameFirstname = [...scientists].sort((a, b) => a.name[0] > b.name[0] ? 1 : -1);
// console.log(nameFirstname);

// const years = [...scientists].sort((a, b) => a.born - b.born);
// console.log(years);

// 4)відсортувати по кількості прожитих років;
// const ageSc = [...scientists].sort((a, b) => (a.dead - a.born) - (b.dead - b.born));
// console.log(ageSc);

// // 5)відфільтрувати, хто народився в 15,16,17ст;
//  const bornCent = scientists.filter((scientist) =>
//  scientist.born >= 1400 && scientist.born < 1700)
//  console.log(bornCent);
 

//  6)знайти рік народження Albert Einstein;

const albert = scientists.find(scientist => scientist.name === "Albert" && scientist.surname === "Einstein")
console.log(albert);