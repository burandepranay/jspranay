
var n = prompt('Enter the number of terms: ');
var n1 = 0;
var n2 = 1;
var n3;

console.log('Fibonacci Series : ');

for (var i = 1; i <= n; i++) {
    console.log(n1);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
}