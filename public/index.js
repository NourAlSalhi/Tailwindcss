const menuMobile = document.querySelector('#menuMobile');
const menu = document.querySelector('#menu');

menuMobile.addEventListener('click', () => {
if(menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
}else
    menu.classList.add('hidden');
})