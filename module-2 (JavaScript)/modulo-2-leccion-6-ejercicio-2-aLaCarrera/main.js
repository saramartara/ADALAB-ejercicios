'use strict';

console.log('hi');


// crear objeto adalaber1:
// - Susana, 34 años, periodista

const adalaber1 = {
  name: 'Susana',
  age: 34,
  job: 'periodista'
}

adalaber1.run = () => {
  console.log("Estoy corriendo")
};

// Creo la función runMarathon dentro del objeto adalaber1
adalaber1.runMarathon = (distance) => {
  console.log(`Estoy corriendo una maratón de ${distance} kilómetros`);
}



adalaber1.run();
adalaber1.runMarathon(50);