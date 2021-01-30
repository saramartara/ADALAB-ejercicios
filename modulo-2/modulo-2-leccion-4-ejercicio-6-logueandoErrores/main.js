'use strict';

function getEl(element) {
  const htmlEl = document.querySelector(element);
  if (htmlEl !== null) {
    console.log(htmlEl);
  } else {
    console.log(
      `No existe ningún elemento con clase, id o tag llamado ${htmlEl}`
    );
  }
}

const testEl = getEl('.boton');
const btnEl = getEl('.btn');
