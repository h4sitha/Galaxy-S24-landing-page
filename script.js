const root = document.documentElement;
const themeBtn = document.querySelector('svg');

themeBtn.addEventListener('click', () => {
    root.classList.toggle('dark-theme');
    themeBtn.style.fill = (themeBtn.style.fill !== "white") ? "white" : "black";
})