'use strict'

const aPagar = 128;
const numComensales = 9;
const chupitoDeAna = 2;

const aPagarCadaUna = (aPagar - chupitoDeAna) / numComensales;
const aPagarPorAna = aPagarCadaUna + chupitoDeAna;

console.log(aPagarCadaUna);
console.log(aPagar);

console.log('Todas tienen que pagar' + aPagarCadaUna + '€');
console.log('Peeeero, Ana tieen que pagar ' + aPagarPorAna + '€');

/*Necesita los paréntesis en la operación para que lo entienda como number y no string*/
console.log('Operación mat:' + (2 + 2));

/*aquí no hace falta porque realiza primero la suma*/
console.log(2 + 2 + 'es un buen número');