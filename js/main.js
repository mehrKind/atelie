const mobileBtn = document.getElementById('open-menue')
const nav = document.querySelector('nav');
const mobileBtnExit = document.getElementById('menue-exit');
mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn')
});
mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn')
});