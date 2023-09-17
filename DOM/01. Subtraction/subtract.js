function subtract() {
    let firstNumber = document.getElementById('firstNumber');
    let secondNumber = document.getElementById('secondNumber');
    
    firstNumber = Number(firstNumber.value);
    secondNumber = Number(secondNumber.value);

    let sum = firstNumber - secondNumber;
    let result = document.getElementById('result');
    result.textContent = sum;
}