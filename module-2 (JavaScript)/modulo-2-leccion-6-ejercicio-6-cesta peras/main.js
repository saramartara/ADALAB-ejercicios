'use strict';

console.log('hi');

const cestaPeras = {};

cestaPeras.max = 100;
cestaPeras.min = 1;
cestaPeras.current = 5;
cestaPeras.initial = 2;
cestaPeras.add = function () {
  return (this.current += 1);
};
cestaPeras.remove = function () {
  return (this.current -= 1);
};
cestaPeras.reset = function () {
  return (this.current = this.initial);
};

console.log(cestaPeras.max);
console.log(cestaPeras.min);
console.log(cestaPeras.current);
console.log(cestaPeras.initial);
console.log(cestaPeras.add());
console.log(cestaPeras.remove());
console.log(cestaPeras.reset());
