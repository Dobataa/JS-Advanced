function solve(number, operation1, operation2, operation3, operation4, operation5){

    number = Number(number);
    let arr = [];
    arr.push(operation1);
    arr.push(operation2);
    arr.push(operation3);
    arr.push(operation4);
    arr.push(operation5);

    let lenght = arr.length;

    for(let i = 0 ; i < lenght; i++){
        let currentOperation = arr[i];
        switch(currentOperation){
            case 'chop':
                number /= 2;
                console.log(number);
                break;
            case `dice`:
                number = Math.sqrt(number);
                console.log(number);
                break;
            case `spice`:
                number++;
                console.log(number);
                break;
            case `bake`:
                number *= 3;
                console.log(number);
                break;
            case `fillet`:
                number *= 0.8;
                console.log(number.toFixed(1));
                break;

        }
    }

}
solve('9', 'dice', 'spice', 'chop', 'bake','fillet');