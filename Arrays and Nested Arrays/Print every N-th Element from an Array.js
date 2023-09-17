function solve(input, number) {

    let length = input.length;
    let result = [];

    for (let i = 0; i < length; i += number) {
        let currentElement = input[i];
        result.push(currentElement);
    }

    for (const el of result) {
        console.log(el);
    }

}
solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2);