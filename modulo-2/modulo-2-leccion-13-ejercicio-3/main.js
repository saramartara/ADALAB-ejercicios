'use strict';

console.log('13: ejercicio 3');

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

const greetings = users.map(function (user) {
  if (user.isPremium) {
    console.log(`Bienvenida ${user.name}. Gracias por confiar en nosotros.`);
  } else {
    console.log(`Bienvenida ${user.name}`);
  }
});

console.log(greetings);

// const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
// console.log(names);

// const greetings = names.map((name) => `Bienvenida  ${name}`);

// console.log(greetings);
