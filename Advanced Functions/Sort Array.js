function solve(numbers, order){
    if(order === 'asc'){
        numbers.sort((a,b) => a - b);
    }else{
        numbers.sort((a,b) => b - a);
    }

    return numbers;
}
solve([14, 7, 17, 6, 8], 'decs');