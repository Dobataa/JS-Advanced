function solve(input) {

    input.sort((a,b) => a.localeCompare(b));
    let firstChar = '';

    for(let i = 0; i < input.length; i++){
        let product = input[i].split(` : `);
        
        if(firstChar !== input[i][0]){
            console.log(input[i][0]);
            firstChar = input[i][0];
        }

        console.log(`  ${product[0]}: ${product[1]}`);
        
    }
}
solve(['Appricot : 20.4', 
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);