function solve(first, second){

    let GCD = 0;
    for(let i = 1; i < 10; i++){
        if(first % i === 0 && second % i === 0){
            GCD = i;
        }
    }

    console.log(GCD);

}
solve(2154, 458);