function solve(arr) {
    let result = [];
    let length = arr.length;
    result.push(arr[0]);

    for (let i = 0; i < length; i++) {
        let currentBiggest = result.pop();
        result.push(currentBiggest);
        if (currentBiggest < arr[i + 1]) {
            result.push(arr[i + 1]);
        }
    }

    console.log(result);

}
solve([20,
    3,
    2,
    15, 6,
    1]);