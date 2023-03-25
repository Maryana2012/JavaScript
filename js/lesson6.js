// ЗАДАЧА 1
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ https://pixabay.com/api/docs/ ,
// ТА ЗА ДОПОМОГОЮ fetch , ВИВЕДИ НА ЕКРАН ОТРИМАНИЙ РЕЗУЛЬТАТ (ВИКОРИСТАЙ МЕТОД createElement())

// const KEY = '34725568-3bb6c7550daf8cb631b41e469';
// const URl = "https://pixabay.com/api/";

// const divEl = document.querySelector(".box");

// fetch(`${URl}?key=${KEY}&color=gray&category=nature`)
//     .then((result) => 
//         result.json())
//     .then(data =>
//         render(data.hits)
//     )
//     .catch(err => console.log(err))    

// function markupImg(card) {
      
//     const imgEl = document.createElement("img");
//     imgEl.src = card.webformatURL;
//     imgEl.width = 250;
//     imgEl.height = 250;

//     divEl.appendChild(imgEl);
// }

// function render(array) {
//     for (const card of array) {
//          markupImg(card);
//     }
// }

// ЗАДАЧА 2
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ  https://www.thecocktaildb.com/api.php , ТА ЗА ДОПОМОГОЮ fetch, ВИВОДЬ РЕЗУЛЬТАТ НА ЕКРАН.
// РЕЗУЛЬТАТ ПОШУКУ МОЖНА ОТРИМАТИ ІЗ ІМПУТА, КОЛИ КЛІЄНТ НАБРАВ ДАНИЙ ТОВАР(ВИКОРИСТАЙ РОЗМІТКУ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА)

// const formEl = document.querySelector('#form');
// const inputEl = document.querySelector('#input');
// const divEl = document.querySelector('.coctails');

// formEl.addEventListener('submit', handleInput);

// function handleInput(event) {
//     event.preventDefault();

//     const inputValue = inputEl.value;
//     console.log(inputValue);

//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`).then(response => response.json()).then(data => renderMarkup(data.drinks)).catch(error => console.log(error))
    
// }

// function markUpCoctails({strDrinkThumb,strDrink}) {

//     const cardOfCoctail = `<div><img src='${strDrinkThumb}'><h2>${strDrink}</h2></div>`;

//     divEl.insertAdjacentHTML('beforeend', cardOfCoctail);
// }

// function renderMarkup(array) {
//     array.forEach(card =>
//         markUpCoctails(card)
//     );
// }

