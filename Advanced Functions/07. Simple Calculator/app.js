function calculator() {
    let firstSelector;
    let secondSelector;
    let result;
    return {
        init(selector1, selector2, resultSelector){
            firstSelector = document.querySelector(selector1);
            secondSelector = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },
        add(){
            result.value = Number(firstSelector.value) + Number(secondSelector.value); 
        },
        subtract(){
            result.value = Number(firstSelector.value) - Number(secondSelector.value); 
        }
    }
}
const calculate = calculator ();
calculate.init ('#num1', '#num2', '#result');




