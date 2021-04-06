'use strict';

const paragraph = document.querySelector('.js-text');

function handlescroll() {
  console.log(window.scrollY);
  if (window.scrollY > 250) {
    paragraph.classList.add('containerB');
  } else {
    paragraph.classList.remove('containerB');
    paragraph.classList.add('js-text');
  }
}

window.addEventListener('scroll', handlescroll);
