'use strict';


// elemento de HTML
const text = document.querySelector('.p1').innerHTML;

// handler
function addText() {
  return text + text;
}

// listener sobre el elemento, con tipo de evento y handler

text.addEventListener('mouseover', addText);

// const text = document.querySelector('.p1').innerHTML;
// text.addEventListener('mouseover', () => text + text);
