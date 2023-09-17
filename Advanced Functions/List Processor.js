function solve(input) {
    let result = [];

    let commands = {
        add(text) {
            result.push(text);
        },
        remove(text) {
            result = result.filter(e => e !== text)
        },
        print() {
            console.log(result.join(','));
        }
    }

    for (let line of input) {
        let [command, text] = line.split(' ');
        commands[command](text);
    }
}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);