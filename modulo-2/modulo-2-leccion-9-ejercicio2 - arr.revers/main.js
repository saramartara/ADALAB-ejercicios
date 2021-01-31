'use strict';


//Ejercicio 1

let myList = [];
function get100Numbers() {
  for (let i = 1; i <= 100; i++) {
    myList.push(i);
  }
  return myList;
}
console.log(get100Numbers());

//Ejercicio 2
let myList2 = [];

function getReversed100Numbers(f) {
  myList2 = f(); //con los PARÉNTESIS f() toma el retorno de la función y no la función en sí
  return myList.reverse();
}
console.log(getReversed100Numbers(get100Numbers));
