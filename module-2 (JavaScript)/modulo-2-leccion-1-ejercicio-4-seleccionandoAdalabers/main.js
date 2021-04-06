'use strict';


const titleElement = document.querySelector('.title'); /*creo la constante titleElement y le asigno la clase .title*/
let adalaberSelected = document.querySelector('.item1'); /*creo la variable adalaberSelected y le asigno la clase .item1*/
adalaberSelected = document.querySelector('.item2'); /*cambio la variable adalaberSelected*/


titleElement.innerHTML = titleElement.innerHTML + adalaberSelected.innerHTML; /*añado contenido a la clase .title, con la variable adalaberSelected*/

