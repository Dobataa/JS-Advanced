function solve(commands) {

    let result = [];
    let length = commands.length;

    for (let i = 0; i < length; i++) {
        let currentCommand = commands[i];
        if (currentCommand === `add`) {
            result.push(i + 1);

        } else if (currentCommand === `remove`) {
            result.pop();
        }
    }

    if(result.length === 0){
        console.log(`Empty`);
    }else{
        console.log(result.join(`\n`));
    }

}
solve(['add',
    'add',
    'remove',
    'add',
    'add']);