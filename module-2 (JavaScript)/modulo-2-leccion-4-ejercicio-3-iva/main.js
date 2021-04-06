'use strict';

const precio = 500;

function iva (a){
    a = precio;
    return a * 1.21;
}

console.log(`Precio sin IVA: ${precio}, IVA: 2,1 y Total: ${iva()}`)