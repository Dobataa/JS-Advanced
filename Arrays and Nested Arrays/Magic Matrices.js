function solve(input) {

    let sum = 0;
    let length = input.length;
    let isMagic = false;

    for (let i = 0; i < length; i++) {
        sum += input[0][i];
    }

    for (let i = 0; i < length; i++) {
        let currentRowSum = 0;
        let currentColSum = 0;

        for (let j = 0; j < length; j++) {
            currentRowSum += input[i][j];
            currentColSum += input[j][i];
        }

        if (currentColSum === sum && currentRowSum === sum) {
            isMagic = true;
        } else {
            isMagic = false;
            break;
        }
    }

    console.log(isMagic);

}
solve([[4, 5, 3],
[6, 3, 6],
[2, 4, 3]]);