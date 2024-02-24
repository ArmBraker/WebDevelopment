"use strict";

var spinnerWrapperEl = document.querySelector('.spinner-wrapper');
window.addEventListener('load', function () {
  spinnerWrapperEl.style.opacity = '0';
  setTimeout(function () {
    spinnerWrapperEl.style.display = 'none';
  }, 1000);
});