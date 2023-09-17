function encodeAndDecodeMessages() {
    let [firstTextarea, secondTextarea] = document.querySelectorAll('div textarea');
    let [firstButton, secondButton] = document.querySelectorAll('div button');

    firstButton.addEventListener('click', encodeMessage);
    secondButton.addEventListener('click', decodeMessage);

    function encodeMessage() {
        let currentMessage = firstTextarea.value.split('');
        for (let i = 0; i < currentMessage.length; i++) {
            currentMessage[i] = Number(currentMessage[i].charCodeAt());
            currentMessage[i]++;
        }

        for (let i = 0; i < currentMessage.length; i++) {
            currentMessage[i] = String.fromCharCode(currentMessage[i]);
        }

        let finalMessage = currentMessage.join('');
        secondTextarea.value = finalMessage;
        firstTextarea.value = '';

    }

    function decodeMessage() {
        let currentMessage = secondTextarea.value.split('');
        for (let i = 0; i < currentMessage.length; i++) {
            currentMessage[i] = Number(currentMessage[i].charCodeAt());
            currentMessage[i]--;
        }

        for (let i = 0; i < currentMessage.length; i++) {
            currentMessage[i] = String.fromCharCode(currentMessage[i]);
        }

        let finalMessage = currentMessage.join('');
        secondTextarea.value = finalMessage;
    }
}