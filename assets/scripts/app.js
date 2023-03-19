let btn = document.querySelector('#btn');
let sbar = document.querySelector('.sidebar');

btn.onclick = function () {
    sbar.classList.toggle('active');
};