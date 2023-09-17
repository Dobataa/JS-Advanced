function focused() {
    let inputElements = document.querySelectorAll('div div input');
    
    for (const input of inputElements) {
        input.addEventListener('focus', (e) => {
            e.target.parentNode.classList.add('focused');
        });

        input.addEventListener('blur', (e) => {
            e.target.parentNode.classList.remove('focused');
        });
    }
}