'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];
let lostEvenArray = [];

// 1. array con los números pares

function bestLostNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      lostEvenArray.push(array[i]);
    }
  }
  return lostEvenArray;
}

console.log(bestLostNumbers(lostNumbers));
console.log(lostEvenArray);

// 2. crear array multiplo de 3

let lostThreeArray = [];

function three(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0) {
      lostThreeArray.push(array[i]);
    }
  }
  return lostThreeArray;
}

console.log(three(lostNumbers));
console.log(lostThreeArray);

//3. concatenar arrays pares y múltiplos de 3

const result = lostEvenArray.concat(lostThreeArray);
console.log(result);
