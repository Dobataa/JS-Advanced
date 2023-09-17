function solve(input){
    let fruits = [];
    let bottles = [];
    
    input.map((el) => {
        let [fruit, quantity] = el.split(' => ');
        quantity= Number(quantity);
        if(!fruits[fruit]){
            fruits[fruit] = 0;
        }
        fruits[fruit] += quantity
        if(fruits[fruit] >= 1000 && !bottles.includes(fruit)){
            bottles.push(fruit);
        }
    });

    for (const fruit of bottles) {
        let res = Math.floor(fruits[fruit] / 1000);
        console.log(`${fruit} => ${res}`);
    };
    
}
solve(['Kiwi => 234',
'Pear => 345',
'Watermelon => 456',
'Kiwi => 567',
'Pear => 678',
'Watermelon => 789']);