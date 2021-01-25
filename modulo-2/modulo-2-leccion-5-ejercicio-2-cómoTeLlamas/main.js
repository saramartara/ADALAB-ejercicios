'use strict';
//input data: 
//- name input .js-name (value)

//output data:
// Hola + .js-name(value) span.js-result (innerHTML)

// Steps
// 1. Get name

function getName() {
  // get element from HTML

  const nameElement = document.querySelector("js-name");
  // extract name from value

  const name = nameElement.value;

  // return name

  return name;
}


// 2. Compose sentence
// Input data:
// Hola + name
// output data: 
// Hola name

function composeSentence (a){
  const final = 'Hola ' + a;
  return finalSentence;
}


// 3. Render Hola name

function renderName(b) {
  const spanResultElement = document.querySelector(".js-result");

  spanResultElement.innerHTML = `Hola${b}`;

}


const name = getName();
const sencente = composeSentence(name);
renderName(name);

// // elemento de HTML
// const button = document.querySelector('.btn');
// let nameText = document.querySelector('.input').value;

// // handler
// function hi() {
//   console.log ('hola ' + nameText);
// }

// listener sobre el elemento, con tipo de evento y handler

renderName.addEventListener('click', renderName);
