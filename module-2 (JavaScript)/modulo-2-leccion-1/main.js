

'use strict';

document.querySelector('h1').innerHTML = '¡Hola mundo!';

let address = "Los Puertas 23";

address = "Venezuela 16";

// const mainTitle = document.querySelector('h1'); /*selector de ELEMENTO (etiqueta)*/
// const mainTitle = document.querySelector('#maintTitle'); /*selector de ID*/
// const mainTitle = document.querySelector('.mainTitle'); /*selector de CLASE*/

// Obtenemos el elemento con el que queremos trabajar usando document.querySelector()
const titleElement = document.querySelector('.title');

// Cambiamos su contenido con innerHTML
titleElement.innerHTML = 'Bienvenida';

// Cambiamos el contenido del elemento, indicando que sea igual al actual, más una nueva palabra añadida
titleElement.innerHTML = titleElement.innerHTML + ' adalaber';