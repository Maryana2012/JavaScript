// ЗАДАЧА 1
// Створіть карточки товару з масиву використовуючи createElement

// import cars from "./data/cars.js";

// const listEl = document.querySelector('.js-goods');

// const handleCars = ({ name, img, price, description }) => {
//     const listItemEl = document.createElement('li');

//     const itemName = document.createElement('h2');
//     itemName.textContent = name;

//     const itemImg = document.createElement('img');
//     itemImg.src = img;
//     itemImg.alt = name;
//     itemImg.width = 120;

//     const itemPrice = document.createElement('p');
//     itemPrice.textContent = `Ціна ${price} грн`;

//     const itemDescription = document.createElement('p');
//     itemDescription.textContent = description;

//     listItemEl.append(itemName, itemImg, itemPrice, itemDescription);

//     return listItemEl;
// }

// const cardCar = cars.map(handleCars);

// listEl.append(...cardCar);


// console.log(cardCar);

// ЗАДАЧА 2
// 2.1НАПИШІТЬ КАЛЬКУЛЯТОР, ЯКИЙ БУДЕ РАХУВАТИ ЦІНУ ШАШЛИКА, В ЗАЛЕЖНОСТІ ВІД ЦІНИ ЗА
// КІЛОГРАМ І КІЛЬКОСТІ
// КУПЛЕНОГО ПРОДУКТА , І БУДЕ ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН


// const refs = {
//   priceEl: document.querySelector('#price'),
//   quantityEl: document.querySelector('#quantity'),
//   totalEl: document.querySelector('.total'),
//   formEl:document.querySelector('.form'),
//   amountEl: document.querySelector('.amount'),
//   containerEl: document.querySelector(".container")

// }
// // console.log(refs);

// function calc(e) {
//   e.preventDefault();

//   const price = refs.priceEl.value;
//   const quantity = refs.quantityEl.value;
//  const totalPrice = price * quantity;
// refs.totalEl.textContent = totalPrice;
// refs.amountEl.textContent = quantity;

// }
// // calc();
// window.addEventListener('DOMContentLoaded', calc);
// // refs.formEl.addEventListener('input', calc);


// // 2.2 ПЕРЕПИШІТЬ КОД , ЩОБ ЗНАЧЕННЯ МИ ОТРИМУВАЛИ ПО КЛІЦІ НА КНОПКУ , ПРИ НАЖАТТІ ЯКОГО БУДЕ ВАМ РАХУВАТИ ТА ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН    <button class="btn">Calculate</button>

// refs.formEl.addEventListener("submit", calc)

// function handleBtnClick() {
//   const price = refs.priceEl.value;
//   const quantity = refs.quantityEl.value;
//   refs.amountEl.textContent = quantity;
// }

// refs.quantityEl.addEventListener('input', handleBtnClick)

// // 2.3 НАПИШІТЬ  РАНДОМНИЙ КОЛІР ДЛЯ НАШОЇ ФОРМИ КОЛЬКУЛЯТОРА ЗА ДОПОМОГОЮ ІНЛАЙНОВОГО СТИЛЮ

// const randomRgbColor = () => {
//   const r = Math.round(Math.random() * (255 - 1) + 1);
//   const g = Math.round(Math.random() * (255 - 1) + 1);
//   const b = Math.round(Math.random() * (255 - 1) + 1);
//   return `rgb(${r},${g},${b})`;
// };

// refs.containerEl.style.backgroundColor = randomRgbColor();

// ЗАДАЧА 3
// 3.1 Є МАСИВ, ПОТРІБНО СТВОРИТИ РОЗМІТКУ ІЗ ТИХ КАРТОК через <ul class="js-list"></ul>

// const instruments = [{
//   id: 1,
//   img: "https://content.rozetka.com.ua/goods/images/big/13664457.jpg",
//   name: "Молоток",
//   price: 150
// },
// {
//   id: 2,
//   img: "https://machtz.com.ua/files/resized/products/dsc_2898_new.800x550.jpg",
//   name: "Перфоратор",
//   price: 3000
// },{
//   id: 3,
//   img: "https://content2.rozetka.com.ua/goods/images/big_tile/232653359.jpg",
//   name: "Рівень",
//   price: 2000
// }]

// const instrumentsEl = document.querySelector('.js-list');

// function makeCard() {
// const acc = instruments.map(({id, img, name, price}) => {
//   return `<li data-id = "${id}">
//   <h2>${name}</h2>
//   <img src="${img}" alt="${name}" width="150">
//   <button type="submit" class="buy">Купити</button>
//   <p>${price}</p>
//   </li>`
// }).join(' ')
// instrumentsEl.insertAdjacentHTML("beforeend", acc);
// }
// makeCard();

// // 3.2 ДОБАВТЕ КНОПКУ, ЧЕРЕЗ ЯКУ МИ КУПЛЯТИМЕМО ТОВАР

// function makeButton(e) {
//   if(!e.target.classList.contains("buy")){
//     return
//   }
//   const idEl = e.target.closest("li");
//   // console.log(idEl);
//   const setEl = idEl.dataset.id;
//   // console.log(setEl);
//   const findEl = instruments.find(instrument => instrument.id === Number(setEl))
//   console.log(findEl);
// }
// instrumentsEl.addEventListener("click", makeButton);

// ---------------------------------------------------
// Додакове завдання на домашнє опрацювання

// ЗАДАЧА 4
// ПОТРІБНО СТВОРИТИ Ф-ЦІЮ , ЯКА БУДЕ ШУКАТИ НАРЦИСА.ГОЛОВНА УМОВА НАРЦИСА ЗНАЮТЬ УСІ , НАРЦИС НЕ ЗНАЄ НІКОГО
// // є елемент масиву , який незнає нікого
// якщо не одна така людина , то вертаємо not found
// якщо один , то перевірити , чи його знають усі люди, якщо так то вертаємо found

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
