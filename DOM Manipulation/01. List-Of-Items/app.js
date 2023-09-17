function addItem() {
    let inputElementArea = document.getElementById('newItemText');
    let list = document.getElementById('items');

    let newInputElement = inputElementArea.value;
    let newLiElement = document.createElement('li');

    newLiElement.textContent = newInputElement;
    list.appendChild(newLiElement);

}