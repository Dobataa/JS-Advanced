function solve(input) {

    let arr = [];
    let length = input.length;

    for (let i = 1; i < length; i += 2) {
        let currentNumber = input[i] * 2;
        arr.unshift(currentNumber);
    }

    console.log(arr);

}
solve([3, 0, 10, 4, 7, 3]);