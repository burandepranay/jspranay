var n = Number( prompt("Enter a value: "));

var rem;
var rev = 0;
var temp = n;

while (n != 0) {
    rem = n % 10;
    rev = rev * 10 + rem;
    n = parseInt(n / 10);
}


if (temp == rev) {
    console.log('It is a palindrome');
} else {
    console.log("it is not a palindrome");
}




