'use strict';

console.log('13: ejercicio 7');

const times = [56, 9, 45, 28, 35];

const average = times.reduce((acc, time) => acc + time);
console.log(average);
const result = average / times.length;
console.log(result);
