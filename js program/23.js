//1. not working

const formatter = new Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'USD'
});

//2. Working 

formatter.format(2500);

const number = 1234.5678;

const result = '$ ' + number.toFixed(2);

console.log(result);