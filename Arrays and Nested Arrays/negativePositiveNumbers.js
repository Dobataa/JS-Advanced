function solve(input){
    let result = [];
    let length = input.length;

    for(let i = 0 ; i < length; i++){
        let currentNumber = input[i];

        if(currentNumber >= 0){
            result.push(currentNumber);
        }else{
            result.unshift(currentNumber);
        }
    }

    console.log(result);

}
solve([7, -2, 8, 9]);