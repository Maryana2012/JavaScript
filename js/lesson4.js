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


const refs = {
  priceEl: document.querySelector('#price'),
  quantityEl: document.querySelector('#quantity'),
  totalEl: document.querySelector('.total'),
  formEl:document.querySelector('.form'),
  amountEl: document.querySelector('.amount'),

}
// console.log(refs);

function calc() {
  const price = refs.priceEl.value;
  const quantity = refs.quantityEl.value;
 const totalPrice = price * quantity;
refs.totalEl.textContent = totalPrice;
refs.amountEl.textContent = quantity;

}
calc();
window.addEventListener('DOMContentLoaded', calc);
refs.formEl.addEventListener('input', calc);
