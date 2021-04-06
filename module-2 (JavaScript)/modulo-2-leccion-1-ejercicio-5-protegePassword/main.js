'use strict';

const hiddenPassword = document.querySelector('.main');
const titleElement = document.querySelector('.title');
let password = document.querySelector('.password');


hiddenPassword.innerHTML = titleElement.innerHTML + '**';