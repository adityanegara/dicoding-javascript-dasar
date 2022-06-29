try{
    console.log('Awal blok try');
    errorCode;
    console.log('Akhir blok try');
}catch(error){
    console.log('error name: ', error.name);
    console.log('error message: ', error.message);
    console.log('error stack: ', error.stack);
}finally{
    console.log('akan selalu dieksekusi');
}

