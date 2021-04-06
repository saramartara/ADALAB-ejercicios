'use strict';

const charactersElement = document.querySelector('.js-char');
const searchElement = document.querySelector('.js-search');

// api
function callToApi(searchValue) {
  fetch('https://swapi.dev/api/people/?search=' + searchValue)
    .then((response) => response.json())
    .then((data) => {
      paintCharacters(data.results);
    });
}

//paint

function paintCharacters(characters) {
  let htmlCode = '';
  for (const character of characters) {
    htmlCode += '<li>';
    htmlCode += `<p>Nombre: ${character.name}</p>`;
    htmlCode += `<p>Nombre: ${character.gender}</p>`;
    htmlCode += '</li>';
  }

  charactersElement.innerHTML = htmlCode;
}

function handleSearch() {
  callToApi(searchElement.value);
  setInLocalStorage(searchElement.value);
}

searchElement.addEventListener('blur', handleSearch);

//local storage

const setInLocalStorage = (searchText) => {
  //JSON.stringify (para pasar a cadena)
  localStorage.setItem('searchText', searchText);
};

const getFromLocalStorage = () {
  const searchText = localStorage.getItem('searchText');
  //si es la primera vez que entra usuaria
  // JSON.parse (para pasar a número)
  if (searchText === null) { 
    callToApi ('skywalker');
    searchElement.value = 'skywalker'; 
    // si ya ha entrado antes, que recupere su búsqueda
  } else {  
    callToApi(searchText)
    // para que aparezca la búsqueda que hizo en el input
    searchElement.value = searchText; 

  }
  console.log(searchText);
}


