'use strict';

let nameVar = 'Clara';

if (`${nameVar}` == 'Sara' || `${nameVar}` == 'Marta') {
    console.log(`Bienvenida, ${nameVar}`)
}
else {
    console.log(`Lo siento pero el usuario que has introducido no está registrado.`)
}

