function solve(input){
    let last = input.pop();
    let first = input.shift();
    let sum = 0;

    sum = Number(first) + Number(last);
    console.log(sum);

}
solve(['20', '30', '40']);
