import { html, render } from './node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';

search();

function search() {
   const article = document.querySelector('article');
   const divTowns = document.getElementById('towns');
   const townsTemplate = (towns) => html`
    <ul>
       ${towns.map((item) => html`<li>${item}</li>>`)}
   </ul>
   `;

   render(townsTemplate(towns), divTowns);
   const liTowns = Array.from(Object.values(divTowns.querySelectorAll('li')));
   
   const searchBtn = article.querySelector('button');
   
   searchBtn.addEventListener('click', onSearch);

   function onSearch(event) {
      const searchText= article.querySelector('#searchText').value;   
      liTowns.forEach((town) => {
         town.classList.remove('active');
         if( searchText.length > 0 && town.textContent.toUpperCase().includes(searchText.toUpperCase()) ) {
            town.classList.add('active');
         }
      });
      
   }





}
