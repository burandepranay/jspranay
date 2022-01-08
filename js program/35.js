function greet() {
    return 'Hello';
}


function name(user, func)
{

 
    const message = func();

    console.log(`${message} ${user}`);
}

name('Sairam', greet);
name('Sainath', greet);
name('Shaiva', greet);