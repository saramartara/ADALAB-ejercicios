'use strict';

// input data: párrafo ('.js-p')
// output data: +=párrafo ('.js-p') innerHTML

const paragraphEl = document.querySelector('.js-p');

function addText() {
  const paragraphElValue = paragraphEl.innerHTML;
  return (paragraphEl.innerHTML += paragraphElValue);
}

// al poner el ratón sobre el párrafo (mouseover)
// añadir un nuevo párrafo con lorem ipsum

paragraphEl.addEventListener('mouseover', addText);
