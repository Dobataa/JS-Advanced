function solve(input) {
    let smallest = [];
    let length = input.length;

    for (let i = 0; i < length; i++) {
        for (let j = length; j >= 0; j--) {
            if (smallest.length === 2) {
                break;
            }
            if (input[j] <= input[i]) {
                smallest.push(input[j]);
                input.splice(j, 1)
            }
        }
    }

    smallest.sort((a, b) => {
         return a - b; 
        });

    console.log(smallest.join(' '));

}
solve([30, 15, 50, 5]);