var m = prompt('Enter the starting value : ');
var n = prompt('Enter the end value : ');

for(var i = m; i <= n; i++){
    var count = 0;

    for(var j = 1; j <= i; j++){
        if (i % j == 0) {
            count ++;
        }
    }


    if (count == 2) {
    console.log(`${i} `);
    }
}