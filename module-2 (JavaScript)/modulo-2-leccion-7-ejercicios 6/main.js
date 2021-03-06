'use strict';

console.log('hola');

// prevent form submit

const form = document.querySelector('.js-form');

function handleForm(ev) {
  ev.preventDefault();
}

form.addEventListener('submit', handleForm);

//handle submit button click

const submitEl = document.querySelector('.js-submit');
const book1 = document.querySelector('.js-input1');
const book2 = document.querySelector('.js-input2');

function handleSaveArray() {
  const arrayBooks = [book1.value, book2.value];
  for (const book of arrayBooks) {
    console.log(
      `¡A mí también me encantó ${book}! Tenemos mucho en común, humana.`
    );
  }
}

submitEl.addEventListener('click', handleSaveArray);
