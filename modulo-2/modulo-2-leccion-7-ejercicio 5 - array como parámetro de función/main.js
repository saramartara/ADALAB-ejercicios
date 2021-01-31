'use strict';

// Ejercicio 5: array como parámetro de una función

const numbers = [5, 9, 2, 4, 5, 5, 8, 28];
const tries = [2, 4, 8, 25, 9];

function average(arr) {
  let accu = 0;

  for (let i = 0; i < arr.length; i++) {
    accu += arr[i];
  }
  let media = accu / arr.length;
  return media;
}

console.log(average(numbers));
console.log(average(tries));
