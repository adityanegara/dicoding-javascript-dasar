class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

const json = `{"name": "Yoda", "age": 900}`

try{
    let user = JSON.parse(json);
    console.log(user.name);
    console.log(user.age);
    if(!user.address){
        throw new ValidationError("name is required!");
    }

    console.log(user.address)
} catch (error){
    if(error instanceof SyntaxError){
        console.log(`JSON Error: ${error.message}`);
    }else if(error instanceof ValidationError){
        console.log(`Invalid data: ${error.message}`);
    }else if(error instanceof ReferenceError){
        console.log(error.message);
    }else{
        console.log(error.stack);
    }
}