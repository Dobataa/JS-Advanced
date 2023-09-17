function solve(param){

    let type = typeof param;

    if(type === `number`){
        let area = (param ** 2) * Math.PI;
        console.log(area.toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
      
}
solve(5);