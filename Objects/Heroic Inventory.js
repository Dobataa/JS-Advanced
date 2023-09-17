function solve(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        let [name, level, items] = input[i].split(` / `);
        level = Number(level);
        items = items ? items.split(`, `) : [];
        
        let currentHeroe = {name,level,items};
        result.push(currentHeroe);
    }

    console.log(JSON.stringify(result));

}
solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);