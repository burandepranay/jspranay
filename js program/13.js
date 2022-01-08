var number = prompt('enter a value: ');
var temp = number; 
var sum = 0;

                

        while (temp>0)
        {
            var digit = temp%10;
            sum += digit**3;
            temp = parseInt(temp/10);
        }

        if(sum == number){
            console.log(` is armstrong`);
        }else{
            console.log(` is not an Armstrong number`);
        }
            