function search() {
   list = document.getElementById('towns').getElementsByTagName('li');
   let searchText = document.getElementById('searchText').value;
   len = list.length;
   let numberOfOcureces = 0 ;
   for ( let i = 0 ; i < len ; i++ ) {
      
      if ( list[i].textContent.includes(searchText) ) {
         numberOfOcureces ++ ;
         document.getElementById('towns').getElementsByTagName('li')[i].style = 'font-weight: bold;text-decoration: underline;';
      } else {
         document.getElementById('towns').getElementsByTagName('li')[i].style = 'font-weight: normal;text-decoration: ""';
      }
   }
   document.getElementById('result').textContent = `${numberOfOcureces} matches found`
}
