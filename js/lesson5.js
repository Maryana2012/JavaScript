// УМОВА
// Зробити фіксований скрол на сторінці для менюшки,
// тобто , щоб наше меню фіксувалось зверху браузера 
// при скролі, для того потрібно порахувати висоту хедера, 
// відстежуємо позицію скролу та додавати клас fixed-nav 
// якщо скрол більше висоту хедера, в іншому випадку його 
// видаляємо

const headerEl = document.querySelector('.header');
// console.log(headerEl.clientHeight)
// console.log(headerEl.clientWidth)
const navEl = document.querySelector('.nav');
// console.log(navEl)
const headerHeightEl = headerEl.clientHeight;
pageYOffset;
function check (){
    if(pageYOffset < headerHeightEl) {
        navEl.classList.add('fixed-nav');
    } navEl.classList.remove('fixed-nav');
}
window.addEventListener('scroll', check);