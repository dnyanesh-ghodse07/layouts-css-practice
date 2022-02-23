const burgerMenu = document.getElementById('burgerMenu');
const closeMenu = document.getElementById('closemenu');
const navbarMenu = document.getElementById('navbar__menu')

burgerMenu.addEventListener('click',() => {
    navbarMenu.style.display = 'flex';
})

closeMenu.addEventListener('click',() => {
    navbarMenu.style.display = 'none'
})