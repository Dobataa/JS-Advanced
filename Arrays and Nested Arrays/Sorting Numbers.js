function solve(arr) {

    let sortedNumbers = arr.sort((a, b) => a - b);
    let result = [];
    let length = arr.length;

    for(let i = 0; i < length; i+=2){
        let currentSmallest = sortedNumbers.shift();
        result[i] = currentSmallest;
        let currentBiggest = sortedNumbers.pop();
        result[i + 1] = currentBiggest
    }

    console.log(result);
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);