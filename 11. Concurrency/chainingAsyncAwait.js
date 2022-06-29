const state = {
    stock: {
        coffeeBeans: 2000,
        water: 2000,
    },
    isCoffeeMachineBusy: true
};

const checkAvailability = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(state.isCoffeeMachineBusy){
                resolve("Mesin Kopi tersedia");
            }else{
                reject("Mesin Kopi tidak tersedia")
            }
        }, 1000)
    })
}

const checkStock = () =>{
    return new Promise((resolve, reject) =>{
        state.isCoffeeMachineBusy = true;
        setTimeout(()=>{
            if(state.stock.coffeeBeans > 16 && state.stock.water > 250){
                resolve("Stock Tersedia!")
            }else{
                reject("Stock tidak cukup!")
            }
        }, 1500)
    })
}

const brewCoffee = () =>{
    console.log("Membuatkan kopi Anda...")
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("Kopi sudah siap")
        }, 2000)
    })
}

const boilWater = () =>{
    return new Promise((resolve, reject) =>{
        console.log("Memanaskan air...");
        setTimeout(()=>{
            resolve("Air Panas sudah siap!")
        }, 2000)
    })
}

const grindCoffeeBeans = () =>{
    return new Promise((resolve, reject) =>{
        console.log("Menggiling biji kopi...");
        setTimeout(()=>{
            resolve("Kopi sudah siap!")
        }, 1000)
    })
}

async function makeEspresso() {
    try {
        await checkAvailability();
        await checkStock();
        await Promise.all([boilWater(), grindCoffeeBeans()]);
        const coffee = await brewCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}

makeEspresso();