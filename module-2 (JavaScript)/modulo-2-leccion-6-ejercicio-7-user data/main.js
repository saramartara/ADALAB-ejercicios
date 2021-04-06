'use strict';

console.log('hi');

const userData = {};

const job = 'developer';

userData.firstName = 'Sara';
userData.lastName = 'Martínez';
userData.age = 39;
userData.job = job;
userData.firstName = 'Maricarmen';
userData.age += 1;

console.log(userData['firstName']);
console.log(userData['lastName']);
console.log(userData['age']);
console.log(userData['job']);
