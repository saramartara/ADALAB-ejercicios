'use strict';

console.log('13: ejercicio 1: .map');

// lección 13 - ejercicio 1 .map

const marks = [5, 4, 6, 7, 9];

// const inflatedMarks = marks.map(function (num) {
//   return num + 1;
// });

const inflatedMarks = marks.map((num) => num + 1);
console.log('.....');
console.log(inflatedMarks);

const numbers = [1, 4, 7, 22];
const doubles = numbers.map((number) => number * 2);
console.log(doubles);
