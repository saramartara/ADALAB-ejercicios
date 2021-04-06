const fs = require('fs');

const fileContent = "Lorem ipsum";

const myObject = {
    originalContent: 'Lorem ipsum',
    changedContent: 'LOREM IPSUM',
    textLenght: 11
 };

 const handleWriteFile = (err, fileContent) => {
     if (err) {
         console.log('Error:', err);
     } else {
         const jsonData = JSON.stringify(fileContent);
         console.log('Contenido del fichero en formato objeto:', jsonData);
        console.log(`Título: ${jsonData.originalContent}`);
        console.log(`Contenido: ${jsonData.changedContent}`);
     }
 }

 fs.writeFile('./output.txt', fileContent, handleWriteFile);
 console.log(fileContent);
