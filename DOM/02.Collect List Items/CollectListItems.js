function extractText() {
    let liElements = document.getElementById('items');
    let textArea = document.getElementById('result');
    textArea.textContent = liElements.textContent;
}