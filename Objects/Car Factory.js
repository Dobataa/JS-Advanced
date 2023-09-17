function solve(car) {

    let smallEngine = { power: 90, volume: 1800 };
    let normalEngine = { power: 120, volume: 2400 };
    let monsterEngine = { power: 200, volume: 3500 };
    let hatchback = { type: 'hatchback', color: '' };
    let coupe = { type: 'coupe', color: '' };
    let finishedCar = {};

    finishedCar.model = car.model;

    if (90 - car.power < 120 - car.power) {
        finishedCar.power = smallEngine;
    } else if (120 - car.power < 200 - car.power) {
        finishedCar.power = normalEngine;
    } else {
        finishedCar.power = monsterEngine;
    }

    if(car.carriage === 'hatchback'){
        finishedCar.carriage = hatchback;
    }else{
        finishedCar.carriage = coupe;
    }

    finishedCar.carriage.color = car.color;

    if(car.wheelsize % 2 === 0){
        car.wheelsize--;
    }

    finishedCar.wheelsize = [];
    for(let i = 0 ; i < 4; i++){
        finishedCar.wheelsize.push(car.wheelsize);
    }

    console.log(finishedCar);

}
solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});