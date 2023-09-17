function create(words) {
   let output = document.getElementById('content');

   for (let section of words) {
      let newDivElement = document.createElement('div');
      let newElement = document.createElement('p');
      newElement.textContent = section;
      newDivElement.appendChild(newElement);
      newElement.style.display = 'none';
      
      newDivElement.addEventListener('click', (e) => {
         newElement.style.display = 'block';
      });

      output.appendChild(newDivElement);
   }
}