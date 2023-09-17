function solve(input) {

    input.sort((a, b) => {
        return a - b;
    });

    let length = input.length;

    if(length % 2 === 0){
        let newLength = length / 2;
        console.log(input.slice(newLength));
    }else{
        let newLength = (length + 1) / 2;
        console.log(input.slice(newLength - 1));
    }

}
solve([3, 19, 14, 7, 2, 19, 6]);