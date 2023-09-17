function solve(array, start, end) {

    if (!Array.isArray(array)) {
        return NaN;
    }

    let startIndex = Math.max(start, 0);
    let endIndex = Math.min(end, array.length - 1);

    let numbers = array.slice(startIndex, endIndex + 1);

    let sum = numbers.reduce((a, b) => a + Number(b), 0);
    
    return sum;
}
solve([10, 'twenty', 30, 40], 0, 2);