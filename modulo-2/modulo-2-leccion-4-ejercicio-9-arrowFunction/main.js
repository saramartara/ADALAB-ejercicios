'use strict';

// EJERCICIO 1

// function multiplication(a, b) {
//   return a * b;
// }

const multiplication = (a, b) => a * b;

console.log(multiplication(2, 5));

// EJERCICIO 2

// function media (a, b, c, d) {
//   return (a+b+c+d) / 4;
// }

const media = (a, b, c, d) => (a + b + c + d) / 4;

console.log(media(5, 6, 10, 8));

// EJERCICIO 3

const precio = 500;

// function iva(a) {
//   a = precio;
//   return a * 1.21;
// }

const iva = (a) => {
  a = 500;
  return a * 1.21;
};

console.log(`Precio sin IVA: ${precio}, IVA: 2,1 y Total: ${iva()}`);

// EJERCICIO 4

// function number(a) {
//   if (a % 2 === 0) {
//     console.log('True');
//   } else {
//     console.log('False');
//   }
// }

const number = (a) => {
  a % 2 === 0 ? console.log('True') : console.log('False');
};

number(5);

// EJERCICIO 6

// function getEl(element) {
//   const htmlEl = document.querySelector(element);
//   if (htmlEl !== null) {
//     console.log(htmlEl);
//   } else {
//     console.log(
//       `No existe ningún elemento con clase, id o tag llamado ${htmlEl}`
//     );
//   }
// }

const getEl = (element) => {
  const htmlEl = document.querySelector(element);
  htmlEl !== null
    ? console.log(htmlEl)
    : console.log(
        `No existe ningún elemento con clase, id o tag llamado ${htmlEl}`
      );
};

const wrong = getEl('.noexiste');
const right = getEl('.paragraph');

// EJERCICIO 7 (no me sale)

// EJERCICIO 8

let secretLetter = 'y';
// function mySecretLetter() {
//   secretLetter = 'x';
//   return secretLetter;
// }

const mySecretLetter = () => {
  secretLetter = 'x';
  return secretLetter;
};

console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "y" - la constante fuera de la función que lee primero
