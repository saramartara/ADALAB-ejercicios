'use strict';

function addName(userName, className, callback) {
  const userNameElement = document.querySelector(className);

  if (userName && userNameElement) {
    /*
     ** Si el valor de userName
     ** y el valor de userNameElement
     ** son truthy
     ** añadimos el nombre a la etiqueta de HTML
     */
    userNameElement.innerHTML = userName;
  } else if (callback) {
    /*
     ** Si el valor de userName
     ** o el valor de userNameElement
     ** son falsy
     ** y callback es truthy
     ** ejecutamos la función callback
     */
    callback();
  }
}

function logError() {
  console.log('error');
}

addName('María', '.first-user__name', logError);
addName('Roberto', null, logError);
addName('', '.third-user__name', logError);
