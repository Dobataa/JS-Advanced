function solve(input) {

    let length = input.length;
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < length; i++) {
        mainDiagonalSum += input[i][i];
        secondaryDiagonalSum += input[i][length - i - 1]
    }

    console.log(`${mainDiagonalSum} ${secondaryDiagonalSum}`);
    
}
solve([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);