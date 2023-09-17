function solve(worker){

    if(worker.dizziness === true){
        let waterIntake = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated += waterIntake;
        worker.dizziness = false;
    }

    console.log(worker);

}
solve({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true });