function sumTable() {
    let prices = document.querySelectorAll('tr td:nth-of-type(2n)');
    
    let sum = Array.from(prices).reduce((a,x) =>{
        let currentValue = Number(x.textContent) || 0;
        return a + currentValue;
    },0);

    let result = document.getElementById('sum');
    result.textContent = sum;
}