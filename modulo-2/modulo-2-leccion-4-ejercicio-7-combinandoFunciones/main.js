'use strict';

function getEl(element) {
  const htmlEl = document.querySelector(element);
  if (htmlEl !== null) {
    const htmlElValue = htmlEl.innerHTML;
    const numberValue = parseInt(htmlElValue);
    oddNumber(numberValue);
  } else {
    console.log(
      `No existe ningún elemento con clase, id o tag llamado ${htmlEl}`
    );
  }
}

const paragraphElement = getEl('.paragraph');

function oddNumber(number) {
  if (a % 2 == 0) {
    console.log(`Este número es PAR: ${number}`);
  } else {
    console.log(`Este número es IMPAR: ${number}`);
  }
}
