function solve(input){

    let length = input.length;
    let output = ``;

    for(let i = 0; i < length; i+=2){
        let currentElement = input[i];
        output+=`${currentElement} `;
    }

    console.log(output);

}
solve(['20', '30', '40','50', '60']);