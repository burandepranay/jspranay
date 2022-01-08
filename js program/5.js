
var kms = prompt("Enter value in kms: ")

var factor = 0.621371


var miles = kms * factor

console.log(`${kms} kms is equal to ${miles} miles.`);
// console.log(miles);


// program to convert celsius to fahrenheit

var celsius = prompt("Enter a celsius value: ");

// calculate fahrenheit
var fahrenheit = (celsius * 1.8) + 32

// display the result
console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);