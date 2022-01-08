// Swaping of two as with temp variable


var a = prompt('Enter  the first variable: ');
var b = prompt('Enter the second variable: ');

var c;

c = a;
a = b;
b = c;



console.log('The value of a ' + a);
console.log('The value of b ' + b);



// Swaping of two as without temp variable


var a = prompt('Enter  the first variable: ');
var b = prompt('Enter the second variable: ');

a = a + b;
b = a - b;
a = a - b;

console.log(`The value of a : a`);
console.log(`The value of b : b`);
