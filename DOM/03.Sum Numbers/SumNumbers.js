function calc() {
    let firstNumber = document.getElementById('num1').value;
    let secondNumber = document.getElementById('num2').value;
    let sum = Number(firstNumber) + Number(secondNumber);
    let result = document.getElementById('sum');
    result.value = sum;
}
