const countDownNotRecursive = (start) =>{
    do{
        console.log(start);
        start-=1;
    }
    while(start > 0);
}

const countDownRecursive = (start) =>{
    console.log(start);
    if(start > 0){
        countDownNotRecursive(start-1);
    }
}

countDownNotRecursive(10);
countDownRecursive(25);