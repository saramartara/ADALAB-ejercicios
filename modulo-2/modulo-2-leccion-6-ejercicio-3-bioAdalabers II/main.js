'use strict';

console.log('hi');

// crear objeto adalaber1:
// - Susana, 34 años, periodista

const adalaber1 = {};
(adalaber1.name = 'Susana'),
  (adalaber1.age = 34),
  (adalaber1.job = 'periodista'),
  (adalaber1.showBio = function () {
    `Hola, me llamo ${adalaber1.name} tengo ${adalaber1.age} y soy ${adalaber1.job} `;
  });

adalaber1.name = 'María';
console.log(adalaber1.showBio());

// adalaber1.showBio = () =>
//   `Hola, me llamo ${adalaber1.name} tengo ${adalaber1.age} y soy ${adalaber1.job} `;
// console.log(showBio());

// Acceder a los datos del objeto y mostrar:
// 'Mi nombre es Susana, tengo 34 años y soy periodista'

console.log(
  `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}.`
);

// crear objeto adalaber2:
// - Rocío, 25 años, actriz

const adalaber2 = {};
adalaber2.name = 'Rocio';
adalaber2.age = '25';
adalaber2.job = 'actriz';
adalaber2.showBio = function () {
  `Hola, me llamo ${adalaber2.name} tengo ${adalaber2.age} y soy ${adalaber2.job} `;
};

console.log(adalaber2.showBio());
console.log(
  `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}.`
);
