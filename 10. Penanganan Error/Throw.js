const json = `{"name": "Yoda", "age": 900}`

try{
    let user = JSON.parse(json);
    console.log(user.name);
    errorCode;
    console.log(user.age);
    if(!user.address){
        throw new SyntaxError("name is required!");
    }

    console.log(user.address)
} catch (error){
    if(error instanceof SyntaxError){
        console.log(`JSON Error: ${error.message}`);
    }else if(error instanceof ReferenceError){
        console.log(error.message);
    }else{
        console.log(error.stack);
    }
}