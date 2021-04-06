'use strict';

console.log('13: ejercicio 10');

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

const incidenceUser = users.find((user) => user.pin === 5232);
console.log(incidenceUser); // devuelve el objeto que contiene 5232

const incidendeUserIndex = users.findIndex((user) => user.pin === 5232);
console.log(incidendeUserIndex); // devuelve 3

const deleteIncidenceUser = users.splice(3, 1);
console.log(users); // devuelve el array users con 4 elementos (quita a Rocío)
