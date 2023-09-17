function solve(input){

    let output = {};

    for(let i = 0; i < input.length; i+=2){
        let currentProduct = input[i];
        let currentCalories = Number(input[i + 1]);

        output[currentProduct] = currentCalories;
    }

    console.log(output);

}
solve(['Yoghurt', '48', 'Rise', '138',
'Apple', '52']);