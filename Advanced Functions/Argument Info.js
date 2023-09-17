function solve() {

    let types = {};

    Array.from(arguments).forEach((arg) => {
        let type = typeof arg;
        console.log(`${type}: ${arg}`);

        if (!types[type]) {
            types[type] = 0;
        }
        types[type]++;
    });

    Object.keys(types)
    .sort((a, b) => {
        return types[b] - types[a];
    })
    .forEach((key) => console.log(`${key} = ${types[key]}`));
}
solve('cat', 42, 124, function () { console.log('Hello world!'); });