const fs = require('fs');

const fileContent = 'Lorem ipsum 2222222';

const myObject = {
  originalContent: fileContent,
  changedContent: fileContent.toUpperCase(),
  textLenght: fileContent.length,
};

console.log(JSON.stringify(myObject));

const handleWriteFile = (err) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('The file has been saved!');
  }
};

fs.writeFile('./output.json', JSON.stringify(myObject), handleWriteFile);
console.log(fileContent);
