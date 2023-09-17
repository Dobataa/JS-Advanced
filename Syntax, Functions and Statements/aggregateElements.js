function solve(input){

    let length = input.length;
    let sum = 0;
    let reverseSum = 0;
    let concat = '';

    for(let i = 0; i < length; i++){

        let currentNumber = input[i];
        sum += currentNumber;
        reverseSum += 1/currentNumber;
        concat += currentNumber;

    }

    console.log(sum);
    console.log(reverseSum);
    console.log(concat);

}
solve([1, 2, 3])