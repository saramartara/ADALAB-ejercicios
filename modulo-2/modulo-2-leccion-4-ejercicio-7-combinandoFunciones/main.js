'use strict';

//con función 1 acceder al párrafo .paragraph y recoger su valor con .innerHTML

function getEl(element) {
  const htmlEl = document.querySelector(element);
  if (htmlEl !== null) {
    const htmlElValue = htmlEl.innerHTML;
    const numberValue = parseInt(htmlElValue);
    console.log(numberValue);
  } else {
    console.log(
      `No existe ningún elemento con clase, id o tag llamado ${htmlEl}`
    );
  }
}

//convertir el valor a número .parseInt
const paragraphElement = getEl('.paragraph');

// let paragraphValue = paragraphElement.innerHTML;
// console.log(paragraphValue);
// const numberValue = parseInt(paragraphValue);
// console.log(numberValue);

// // //con la función 2:
// // // si es par escribir en consola: 'Este número es PAR: ...' o 'Este número es IMPAR: ...'

// function oddNumber(a) {
//   if (a % 2 == 0) {
//     console.log(`Este número es PAR: ${a}`);
//   } else {
//     console.log(`Este número es IMPAR: ${numberValue}`);
//   }
// }

// console.log(oddNumber(numberValue));
