function solve() {
  let allAnswers = Array.from(document.getElementsByClassName('answer-text'));
  let counter = 0;
  let allSections = Array.from(document.querySelectorAll('section'));
  let questions = 0;
  let result = document.getElementById('results');

  for (const answer of allAnswers) {
    answer.addEventListener('click', check);
  }

  function check(e) {
    let clickedAnswer = e.target;
    questions++;

    if (clickedAnswer.textContent === 'onclick' ||
      clickedAnswer.textContent === 'JSON.stringify()' ||
      clickedAnswer.textContent === 'A programming API for HTML and XML documents') {
      counter++;
    }
    if (questions < 3) {
      allSections[questions].style.display = 'block';
    }
    allSections[questions - 1].style.display = 'none';

    let newElement = document.createElement('p');
    let h1Element = document.querySelector('li h1');

    if(counter = 3){
      newElement.textContent = 'You are recognized as top JavaScript fan!';
    }else{
      newElement.textContent = `You have ${counter} right answers`;
    }

  }
}
