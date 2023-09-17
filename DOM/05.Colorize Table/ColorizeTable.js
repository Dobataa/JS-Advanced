function colorize() {
    let rows = document.querySelectorAll('tr:nth-of-type(2n) td');
    rows.forEach(element => {
        element.style.backgroundColor = 'teal';
    });
}