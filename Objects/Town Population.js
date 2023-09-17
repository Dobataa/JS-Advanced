function solve(input){

    let towns = {};

    for(let i = 0; i < input.length; i++){
        let [town, populationText] = input[i].split(` <-> `);
        let population = Number(populationText);
        
        if(!towns[town]){
            towns[town] = 0
        }

        towns[town] += population;

    }

    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }

}
solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);