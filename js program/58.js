const person = {
    id: 1,
    name: 'Sai',
    age: 25
}

const hasKey = 'name' in person;

if(hasKey) {
    console.log('The key exists.');
}
else {
    console.log('The key does not exist.');
}