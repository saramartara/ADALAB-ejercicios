'use strict';

//Ejercicio 2

for (let i = 1; i < 21; i++) {
  console.log('Voy por la vuelta ' + i);
}

// Ejercicio 3

let acc = 0;

for (let i = 0; i < 10; i++) {
  acc = acc + 2;
}
console.log('El resultado es: ', acc);

// Ejercicio 4: Luna del cazador
// - 5 octubre 2017 --> inicio
// - próximas 15 lunas --> condición
// - cada 3 años --> actualización

let moon = 2017;

for (let i = 0; i < 15; i++) {
  moon = moon + 3;
  console.log('La luna del cazador será el 5 de octubre de ' + moon);
}
