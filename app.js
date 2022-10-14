let backgroundAll = document.querySelector('body');
window.addEventListener('scroll', scrollFunction)

function scrollFunction() {
    let rightScroll = window.scrollY
    if (rightScroll > 500) {
        backgroundAll.classList.add('backgroundScroll')
    } else {
        backgroundAll.classList.remove('backgroundScroll')
    }
}

let menuClick = document.querySelector('.burgerMenu');
let menuRection = document.querySelector('.menu');

menuClick.addEventListener('click', functionMenuClick)

function functionMenuClick() {
    menuRection.classList.toggle('menuAfterClick');
}      