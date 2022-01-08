const person = {
    name: 'Sai',
    age: 25,
}


const clonePerson = { ... person}

console.log(clonePerson);


clonePerson.name = 'Sai';

console.log(clonePerson.name);
console.log(person.name);