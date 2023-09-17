function solve(arr, rotations) {

    for(let i = 0; i < rotations; i++){
        let currentNumber = arr.pop();
        arr.unshift(currentNumber);
    }

    console.log(arr.join(` `));

}
solve(['1',
    '2',
    '3',
    '4'],
    2);