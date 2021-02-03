'use strict';

//Lección 11 - Ejercicio 1

console.log('holi');

const numbers = [1, 2, 3];

function handleArrayList() {
  let listElement = document.querySelector('.list');
  for (let index = 0; index < numbers.length; index++) {
    let newItem = document.createElement('li');
    let newContent = document.createTextNode(numbers[index]);
    newItem.appendChild(newContent);
    listElement.appendChild(newItem);
  }
  console.log(listElement);
}
handleArrayList();

// const listEl = document.querySelector('.list');
// console.log(listEl);

// function arrayList(arr) {
//   let htmlCode = '<ul>';

//   for (let i = 0; i < arr.length; i++) {
//     htmlCode += '<li>';
//     htmlCode += arr[i];
//     htmlCode += '</li>';
//   }
//   htmlCode += '</ul>';

//   listEl.innerHTML = htmlCode;
// }

// arrayList(numbers);
