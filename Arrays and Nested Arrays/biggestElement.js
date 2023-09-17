function solve(input) {

    let length = input.length;
    let allMaxes = [];

    for (let i = 0; i < length; i++) {
        let currentArr = input[i];
        let currentMax = Math.max(...currentArr);
        allMaxes.push(currentMax);
    }

    console.log(Math.max(...allMaxes));

}
solve([[20, 50, 10],
[8, 33, 145]]);