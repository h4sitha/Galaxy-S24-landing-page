const root = document.documentElement;
const themeBtn = document.querySelector('svg');
const logo = document.querySelector('#samsung-logo');

themeBtn.addEventListener('click', () => {
    root.classList.toggle('dark-theme');
    themeBtn.style.fill = (themeBtn.style.fill !== "white") ? "white" : "black";
    logo.classList.toggle('logo-inverted');
})