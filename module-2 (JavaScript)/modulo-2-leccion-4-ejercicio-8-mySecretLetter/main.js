'use strict';

// // modificamos una variable de ámbito global
let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}

console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "y" - la constante fuera de la función que lee primero


