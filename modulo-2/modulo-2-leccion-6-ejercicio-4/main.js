'use strict';



const buttonElement = document.querySelector('.listener');


function functionEvent (Event) {
  console.log(Event);
}


buttonElement.addEventListener('mouseover', functionEvent);


// type es una propiedad del objeto EVENT y muestra cuando se ejecuta la función 
// dentro del listener. type = 'click', type = 'mouseover'...
