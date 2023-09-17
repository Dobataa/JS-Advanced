function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let rows = document.querySelectorAll('tbody tr');
   let match = document.getElementById('searchField');

   function onClick() {
      for (const row of rows) {
         row.classList.remove('select');
         if(match.value !== '' && row.innerHTML.includes(match.value)){
            row.className = 'select';
         }
      }
      match.value = '';
   }
}