function solve(first, second){

    let firstNum = Number(first);
    let secondNum = Number(second);
    let sum = 0;

    for(let i = firstNum; i <= secondNum; i++){
        sum += i;
    }

    console.log(sum);

}
solve('1', '5' );