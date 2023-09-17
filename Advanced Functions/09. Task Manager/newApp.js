function solve() {
    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let date = document.getElementById('date');
    let addButton = document.getElementById('add');

    let open = document.getElementsByTagName('section')[1];
    let inProgress = document.getElementsByTagName('section')[2];
    let complete = document.getElementsByTagName('section')[3];

    function createElement(type, text, className) {
        let result = document.createElement(type);
        result.textContent = text;

        if (className) {
            result.className = className;
        }
        return result;
    }

    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (task.value === ' ' || description.value === ' ' || date.value === ' ') {
            return;
        }

        let article = createElement('article');
        let h3 = createElement('h3', task.value);
        let pDescription = createElement('p', 'Description: ' + description.value);
        let pDueDate = createElement('p', 'Due Date: ' + date.value);
        let div = createElement('div', undefined, 'flex');
        let greenButton = createElement('button', 'Start', 'green');
        let redButton = createElement('button', 'Delete', 'red');

        div.appendChild(greenButton);
        div.appendChild(redButton);

        article.appendChild(h3);
        article.appendChild(pDescription);
        article.appendChild(pDueDate);
        article.appendChild(div);

        open.children[1].appendChild(article);
        task.value = '';
        description.value = '';
        date.value = '';

        redButton.addEventListener('click', () => {
            article.remove();
        });

        greenButton.addEventListener('click', () => {
            inProgress.children[1].appendChild(article);
            let finishButton = createElement('button', 'Finish', 'orange');

            greenButton.remove();
            div.appendChild(finishButton);

            finishButton.addEventListener('click', () => {
                complete.children[1].appendChild(article);
                div.remove();
            })
        });
    });
}
