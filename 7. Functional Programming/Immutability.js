const user = {
    firstName: 'Aditya',
    lastName: 'Negoro',
}

//not immutable
const renameLastNameUser = (newLastName, user) =>{
    user.lastName = newLastName;
}
renameLastNameUser('Negara', user);
console.log(user);

//immutable
const createUserWithNewLastName = (newLastName, user) =>{
    return {...user, lastName: newLastName};
}

const newUser = createUserWithNewLastName('Negara', user);
console.log(newUser);