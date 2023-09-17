function deleteByEmail() {
    let inputTextElement = document.querySelector('[name = "email"]');
    let inputEmail = inputTextElement.value;

    let emailElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let emails = Array.from(emailElements);

    let elementForDeleting = emails.find(x => x.textContent == inputEmail );
    let result = document.getElementById('result');

    if(elementForDeleting){
        elementForDeleting.parentNode.remove();
        result.textContent = 'Deleted.';
    }else{
        result.textContent = 'Not found.';
    }
}