'use strict';


// elemento de HTML
const button = document.querySelector('.btn');
let text = document.querySelector('.text');

// handler
function changeText() {
  return text.innerHTML = `Mi primer click, ¡ole yo y la mujer que me parió!`;
}

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener('click', changeText);
