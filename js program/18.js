

function reverseString(str) {

 
var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}


var string = prompt('Enter a string: ');

var result = reverseString(string);
console.log(result);