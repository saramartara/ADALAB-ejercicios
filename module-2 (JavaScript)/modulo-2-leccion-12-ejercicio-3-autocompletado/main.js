'use strict';

//Lección 12 - Ejercicio 3

const arrayData = [
  { name: 'Nadia', surname: 'Murias', phone: 123456789 },
  { name: 'Sara', surname: 'Martínez', phone: 656952805 },
  { name: 'Maricarmen', surname: 'López', phone: 987654321 },
];

const selectionElement = document.querySelector('.auto');
const surnameElement = document.querySelector('.item2');
const phoneElement = document.querySelector('.item3');

// función

function handleSelect() {
  for (let i = 0; i < arrayData.length; i++) {
    if (i === 0) {
      surnameElement.value = arrayData[i].surname;
      phoneElement.value = arrayData[i].phone;
    } else if (i === 1) {
      surnameElement.value = arrayData[i].surname;
      phoneElement.value = arrayData[i].phone;
    } else {
      surnameElement.value = arrayData[i].surname;
      phoneElement.value = arrayData[i].phone;
    }
  }
  handleSelect();

  //   if (arrayData.name === 'Nadia') {
  //     surnameElement.value = 'Murias';
  //     phoneElement.value = '123456789';
  //   }
}

// CUANDO la usuaria cambie el select hacemos handleSelect

selectionElement.addEventListener('change', handleSelect);
