'use strict';

//input data:

const buttonEl = document.querySelector('.js-btn');

//function: add class ('.btnBg') if doesn't contain / remove if it contains
// use classList.toggle

function handleColorButton() {
  buttonEl.classList.toggle('btnBg');
}

//WHEN user click button ('.js-btn') --> function handleColorButton

buttonEl.addEventListener('click', handleColorButton);
