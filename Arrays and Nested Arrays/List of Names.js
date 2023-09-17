function solve(arr) {

    let names = arr.sort((a,b) => a.localeCompare(b));
    let length = names.length;

    for (let i = 1; i <= length; i++) {
        console.log(`${i}.${names[i - 1]}`);
    }

}
solve(["John",
    "bob",
    "Christina",
    "Ema"]);