'use strict';

const handleElement = document.querySelector ('.document'); 
console.log(handleElement)
function changeElement(event) {
  if (event.key === 'r') {
    handleElement.classList.add('documentR')
    handleElement.classList.remove('documentM')
  } else if (event.key === 'm') {
    handleElement.classList.add('documentM')
    handleElement.classList.remove('documentR')
  }
  console.log(event.key);
}

handleElement.addEventListener('keydown', changeElement);