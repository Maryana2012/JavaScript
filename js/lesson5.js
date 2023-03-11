// УМОВА
// Зробити фіксований скрол на сторінці для менюшки,
// тобто , щоб наше меню фіксувалось зверху браузера 
// при скролі, для того потрібно порахувати висоту хедера, 
// відстежуємо позицію скролу та додавати клас fixed-nav 
// якщо скрол більше висоту хедера, в іншому випадку його 
// видаляємо

// const header = document.querySelector(".header");
// // console.log(headerEl.clientHeight);
// // console.log(headerEl.clientWidth)
// const nav = document.querySelector(".nav");
// // console.log(navEl)
// const headerHeight = header.clientHeight;
// pageYOffset;
// function check (){
//     if(pageYOffset > headerHeight) {
//         nav.classList.add('fixed-nav');
//     } nav.classList.remove('fixed-nav');
// }
// window.addEventListener('scroll', check);

// 2 варіант

// const header = document.querySelector(".header");
// const nav = document.querySelector(".nav");

// const headerHeight = header.clientHeight;
// pageYOffset;

// function navbarFixed() {
//   if (pageYOffset > headerHeight) {
//     nav.classList.add("fixed-nav");
//   } else {
//     nav.classList.remove("fixed-nav");
//   }
// }

// window.addEventListener("scroll", navbarFixed);
