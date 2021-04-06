'use strict';

//input data: name input .js name (value)
//output data: Hola + .js-name(value) into span .js-result (innerHTML)

const buttonElement = document.querySelector('.js-btn');
const nameElement = document.querySelector('.js-name');
const resultElement = document.querySelector('.js-result');

//steps:
//1. Get name
//2. Render name

function renderName() {
  let nameValue = nameElement.value;
  return (resultElement.innerHTML = `Hola ${nameValue} `);
}

buttonElement.addEventListener('click', renderName);
