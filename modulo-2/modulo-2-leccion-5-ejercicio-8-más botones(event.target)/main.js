'use strict';

// NO RESUELTO!!!!!!

//input data:

const containerEl = document.querySelector('.js-container');

//function: add class ('.btnBg') if doesn't contain / remove if it contains
// use classList.toggle

const handleButtonClick = function (ev) {
  let clickedButton = ev.target;
  clickedButton.classList.toggle('btnBg');
};

//WHEN user click button container ('.js-btn') --> function handleButtonClick

containerEl.addEventListener('click', handleButtonClick);
