'use strict';

// function writeThis(word, times) {
//   return word.repeat(times);
// }

// function getRandomNumber(max) {
//   return Math.ceil(Math.random() * max);
// }
// const randomNumber = getRandomNumber(100);

// console.log(writeThis(`Patata`, randomNumber));
// console.log(writeThis(`Aguacate`, randomNumber));
// console.log(writeThis(`Pizza`, randomNumber));

const myWordList = [
  {
    text: 'Pencil',
    total: 6,
  },
  {
    text: 'Thermo',
    total: 2,
  },
  {
    text: 'TV',
    total: 8,
  },
  {
    text: 'Phone',
    total: 4,
  },
];

function writeThis(word, times) {
  return word.repeat(times);
}


function writeMyArray(arr) {
  return writeThis();
}



console.log(writeMyArray(myWordList[0]);

//para acceder al array: myWordList[0].text // Pencil
