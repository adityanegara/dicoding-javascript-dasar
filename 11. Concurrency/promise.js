const executorFunction = (resolve, reject) =>{
    const isCoffeeMakerReady = true;
    if(isCoffeeMakerReady){
        resolve("Kopi berhasil dibuat")
    }else{
        reject("Mesin kipi tidak bisa digunakan")
    }

}

const makeCoffee = () =>{
    return new Promise(executorFunction);
}

const coffee = makeCoffee();
console.log(coffee)