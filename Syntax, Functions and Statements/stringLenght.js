function solve(first, second, third){

    let firstLenght = first.length;
    let secondLenght = second.length;
    let thirdLenght = third.length;

    let fullLenght= firstLenght + secondLenght + thirdLenght;
    let averageLength = fullLenght / 3;

    console.log(fullLenght);
    console.log(Math.floor(averageLength));

}
solve('chocolate', 'ice cream', 'cake');