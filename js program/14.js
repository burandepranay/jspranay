var rev = 0;
var num = 123456;
var rem;

while(num != 0){
	rem = num % 10;
  rev = rev * 10 + rem;
  num = Math.floor(num/10);
}

console.log("Reverse number : " + rev);


