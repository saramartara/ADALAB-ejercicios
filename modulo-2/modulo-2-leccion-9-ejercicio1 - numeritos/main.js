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
