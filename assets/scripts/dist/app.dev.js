"use strict";

var btn = document.querySelector('#btn');
var sbar = document.querySelector('.sidebar');

btn.onclick = function () {
  sbar.classList.toggle('active');
};