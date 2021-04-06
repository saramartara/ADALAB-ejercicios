'use strict';

const breedListElement = document.querySelector('.js-breedList');

fetch('https://dog.ceo/api/breeds/list/all')
  .then((response) => response.json())
  .then((data) => {
    // console.log (data), para ver si es data.message
    // si lo primero es una llave {} es un objeto y tendré que hacer for IN
    for (const breed in data.message) {
      console.log(breed);
      breedListElement.innerHTML += `<li>${breed}<li>`;
    }
  });

// fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
//   .then((response) => response.json())
//   .then((dataImage) => {
//     console.log(dataImage.message);

//     breedListElement.innerHTML += `<li><h2>${breed}<h2><img src = "${dataImage.message}" alt="${breed}"/></li>`;
//   });

// const breed = 'chihuahua';

// fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
//   .then((response) => response.json())
//   .then((dataImage) => {
//     console.log(dataImage.message);

//     breedListElement.innerHTML += `<li><h2>${breed}<h2><img src = "${dataImage.message}" alt="${breed}"/></li>`;
//   });
