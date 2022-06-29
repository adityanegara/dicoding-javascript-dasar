const PI = 3.14;

const countAreaOfCircleNotPureFunction = (radius) =>{
    return PI * (radius * radius);
}

const countAreaOfCirclePureFunction = (radius) =>{
    return 3.14 * (radius * radius);
}

const createPersonWithAgeNotPureFunction = (age, person) =>{
    person.age = age;
    return person;
}

const createPersonWithAgePureFunction = (age, person) =>{
    return {...person, age};
}

const person = {
    name: 'Bobo'
};
  
// const newPerson = createPersonWithAgeNotPureFunction(18, person);
const newPersonTwo = createPersonWithAgePureFunction(20, person)
console.log(person);
console.log(newPersonTwo);
