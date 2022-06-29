const wrongOrderCoffee = () =>{
    let coffee = null;
    console.log("Sedang membuat kopi, silahkan tunggu...");
    setTimeout(()=>{
        coffee = "Kopi sudah jadi!";
    }, 3000);
    return coffee;
}

const orderCoffee = callback =>{
    let coffee = null;
    console.log("Sedang membuat kopi, silahkan tunggu...");
    setTimeout(()=>{
        coffee = "Kopi sudah jadi!";
        callback(coffee);
    }, 3000);
}

// const coffee = wrongOrderCoffee();
// console.log(coffee);
orderCoffee(coffee => {
    console.log(coffee);
});
