function solve(number){

    let digit = number.toString();
    let digitArr = digit.split(``);
    let length = digitArr.length;
    let first = digitArr[0];
    let isValid = true;
    let sum = 0;

    for(let i = 0; i < length; i++){
        sum += Number(digitArr[i]);
        let current = digitArr[i];
        if(first !== current){
            isValid = false;

        }
    }

    if(isValid){
        console.log(`true`);
    }else{
        console.log(`false`);
    }

    console.log(sum);

}
solve(1234);