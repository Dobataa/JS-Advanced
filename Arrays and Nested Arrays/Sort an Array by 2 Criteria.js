function solve(arr) {

    let alphabeticalSort = arr.sort((a,b) => a.localeCompare(b));
    let fullSort = alphabeticalSort.sort((a,b) => a.length - b.length);

    console.log(fullSort.join(`\n`));
}
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);