function addItem() {
    let textElement = document.getElementById('newItemText').value;
    let valueElement = document.getElementById('newItemValue').value;
    let menu = document.getElementById('menu');

    let option = document.createElement('option');
    option.text = textElement;
    option.value = valueElement;

    menu.appendChild(option);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';

}