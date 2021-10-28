function create(words) {
     
   const outherDiv = document.getElementById('content');

      words.forEach(element => {
         
         let currentDiv = document.createElement('div');
         let currentP = document.createElement('p');
         
         currentP.textContent = element ;
         currentP.style.display = 'none';
         outherDiv.appendChild(currentDiv);
         currentDiv.appendChild(currentP);
         currentDiv.addEventListener('click', onClick);
    
      });

      function onClick(ev) {
         ev.target.children[0].style.display = 'block' ;
      }
  
}