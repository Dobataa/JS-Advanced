function search() {
   let towns = document.querySelectorAll('#towns li');
   Array.from(towns);
   let search = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let count = 0;

   for (let town of towns) {
      if(town.textContent.includes(search)){
         count++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      }else{
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
   result.textContent = `${count} matches found`;

}
