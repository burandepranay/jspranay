
var string = prompt('Enter a sentence: ');


var words = string.split(' ');

words.sort();

console.log('The sorted words are:');

for (var element of words) {
  console.log(element);
}