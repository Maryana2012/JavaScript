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