'use strict';

console.log("hi");


const teacherList = document.querySelector(".teachers");


function changeColor (event) {
  const clickedElement = event.target;
  const liElement = clickedElement.closest('.teacher');
  liElement.classList.toggle("teacher--selected");

  liElement.querySelector(".favorite").innerHTML = "Quitar";

}


// al clicar una foto: añadir clase .teacher--selected si no la tinee o quitarla si la tiene 


teacherList.addEventListener ('click', changeColor);

// modificar div.favourite intercambiar Quitar y Añadir - toggle
