'use strict'

const age = document.querySelector('.age');
const myAge = age.innerHTML;
const hoursByYear = 24 * 365; 

const result = myAge * hoursByYear;

console.log(result)
