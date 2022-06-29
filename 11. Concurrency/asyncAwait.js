const getCoffee = () =>{
    return new Promise((resolve, reject) =>{
        const seeds = 1;
        setTimeout(()=>{
            if(seeds >= 10){
                resolve("Kopi didapatkan!");
            }else{
                reject("Biji kopi habis")
            }
        }, 1000)
    })
}

const makeCoffee = async () =>{
    try{
        const coffee = await getCoffee();
        console.log(coffee);
    }catch(rejectedfReason){
        console.log(rejectedfReason)
    }
}

makeCoffee();