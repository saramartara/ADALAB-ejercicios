'use strict';

//input data:
// - input js-input value
// - output js-p innerHTML

const inputEl = document.querySelector('.js-input');
const renderEl = document.querySelector('.js-p');

//function handleValue: take the value from input in the Listener (event.currentTarget) and render it in <p>
function handleValue(event) {
  let inputElValue = event.currentTarget.value;
  return (renderEl.innerHTML = inputElValue);
}

inputEl.addEventListener('keyup', handleValue);
//WHEN user write 1 letter (event.key), --> function handleValue
