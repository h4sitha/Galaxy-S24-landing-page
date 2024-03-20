const root = document.documentElement;
const themeBtn = document.querySelector('svg');

themeBtn.addEventListener('click', () => {
    root.classList.toggle('dark-theme');
})