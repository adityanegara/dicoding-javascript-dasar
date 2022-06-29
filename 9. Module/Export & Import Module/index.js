import {coffeStock, isCoffeMachineReady} from "./state.js";

const displayStock = stock =>{
    for(const type in stock){
        console.log(type);
    }
}

displayStock(coffeStock);
console.log(isCoffeMachineReady);