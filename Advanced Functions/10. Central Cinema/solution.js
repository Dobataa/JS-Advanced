function solve() {
    let [name, hall, ticketPrice] = Array.from(document.querySelectorAll('#container input'));
    let btnOnScreen = document.getElementsByTagName('button')[0];
    let onScreen = document.querySelector('#movies ul');
    let archive = document.querySelector('#archive ul');
    let btnClear = document.querySelector('#archive button');


    function createElement(type, text, className) {
        let result = document.createElement(type);
        result.textContent = text;

        if (className) {
            result.className = className;
        }
        return result;
    }

    btnOnScreen.addEventListener('click', (e) => {
        e.preventDefault();

        if (name.value === '' || hall.value === '' || isNaN(ticketPrice.value)) {
            return;
        };

        let liElement = createElement('li');
        let movieName = createElement('span', name.value);
        let movieHall = createElement('strong', `Hall: ${hall.value}`);

        let divElement = createElement('div');
        let price = createElement('strong', Number(ticketPrice.value).toFixed(2));
        let inputElement = createElement('input')
        inputElement.setAttribute('placeholder', 'Tickets Sold');
        let btnArchive = createElement('button', 'Archive');

        divElement.appendChild(price);
        divElement.appendChild(inputElement);
        divElement.appendChild(btnArchive);

        liElement.appendChild(movieName);
        liElement.appendChild(movieHall);
        liElement.appendChild(divElement);

        onScreen.appendChild(liElement);

        nameString = name.value;
        name.value = '';
        hall.value = '';
        ticketPriceNumber = ticketPrice.value;
        ticketPrice.value = '';

        btnArchive.addEventListener('click', () => {
            liElement.remove();

            let newLiElement = createElement('li');
            let sum = Number(inputElement.value) * Number(ticketPriceNumber);
            let spanElement = createElement('span', nameString);
            let strongElement = createElement('strong', `Total amount: ${sum.toFixed(2)}`);
            let btnDelete = createElement('button', 'Delete');

            newLiElement.appendChild(spanElement);
            newLiElement.appendChild(strongElement);
            newLiElement.appendChild(btnDelete);
            archive.appendChild(newLiElement);

            btnDelete.addEventListener('click', () => {
                newLiElement.remove();
            });

            btnClear.addEventListener('click', () => {
                while (archive.firstChild) {
                    archive.removeChild(archive.firstChild);
                }
            })
        })
    });
}