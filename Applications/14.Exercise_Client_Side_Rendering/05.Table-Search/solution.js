import { html, render } from './node_modules/lit-html/lit-html.js';


solve();

async function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const tBody = document.querySelector('tbody');
   
   const tableBody = await loadData();
   

//--------------------------------------------------------------------------
   function onClick() {
      
      const inputText = document.getElementById('searchField');
      const searchText = inputText.value;
      inputText.value = '';
      if(!(searchText.length > 0)) { return }
      const rows = Array.from( tableBody.querySelectorAll('tr'));
      rows.forEach((row) => {
         const el = Array.from(row.querySelectorAll('td'));         
         row.classList.remove('select');
         el.forEach((td) => {
            if(td.textContent.toLowerCase().includes(searchText.toLowerCase())) {
               row.classList.add('select');
            }
            
            console.log(td.textContent);
         });
      });
      //console.log(rows);
      
      
   }
//--------------------------------------------------------------------------
   async function loadData(){
      const res = await fetch('http://localhost:3030/jsonstore/advanced/table');
      const data = await res.json();
      const arrData = Object.values(data);
      const loadTemplate = (arrData) => html`
         ${arrData.map((row) => html`
         <tr>
            <td>${row.firstName} ${row.lastName}</td>
            <td>${row.email}</td>
            <td>${row.course}</td>
         </tr>
         `)}
      `;      
      render(loadTemplate(arrData), tBody);  
      return tBody;
   }
   
}

