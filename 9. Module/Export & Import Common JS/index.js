const {isCoffeMachineReady, coffeeStock} = require('./state');

const makeCoffe = (coffeeStock,bean, miligramsNeeded) =>{
    if(isCoffeMachineReady){
        if(coffeeStock[bean] >= miligramsNeeded){
            console.log(`Berhasil Membuat Kopi ${bean}`);
        }else{
            console.log(`Biji Kopi Habis`)
        }
    }else{
        console.log('Mesin Kopi belum siap!');
    }
}

makeCoffe(coffeeStock,'robusta', 80);