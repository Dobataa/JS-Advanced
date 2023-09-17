function solve() {
    let inputElement = document.getElementById('input');
    let sentances = inputElement.value.split(`. `).filter(s => s !== ``);
    let resultDiv = document.getElementById('output');

    while (sentances.length > 0) {
        let text = sentances.splice(0, 3).join('. ') + '.';
        let p = document.createElement('p');
        p.textContent = text;
        resultDiv.appendChild(p);
    }
}