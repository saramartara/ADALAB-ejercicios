'use strict';

//Ejercicio 4
const countElement = document.querySelector('.js-count');
const listElement = document.querySelector('.js-list');
const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];

// 1 Mostrar una frase que indique cuántas tareas hay.
countElement.innerHTML = `Tenemos ${task.length} tareas`;

//2 Mostrar sólo una tarea

for (const oneTask of tasks) {
  console.log(oneTask.name);
  listElement.innerHTML += `<li>${oneTask.name}</li>`;
}
