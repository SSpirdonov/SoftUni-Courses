// Initialization
// Find relevant section
// detach section from DOM

import { showCreate } from './create.js';
import { showDetails } from './details.js';
import { showView, e } from './dom.js';

let moviesCache = null;
let lastLoaded  = null;
const maxAge = 6000;

const section = document.getElementById('home-page');
const catalog = section.querySelector('.card-deck.d-flex.justify-content-center');


section.querySelector('#createLink').addEventListener('click', (event) => {
    event.preventDefault();
    showCreate();
});
section.remove();

catalog.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    if( target.tagName == 'BUTTON' ) {
        target = target.parentElement;
    }
    if( target.tagName == 'A' ){
        const id = target.dataset.id;
        showDetails(id);
    }

});


// display logic
export function showHome() {
    showView(section)
    getMovies();
}

async function getMovies() {
    catalog.replaceChildren(e('p', {}, 'Loading...'));
    let t = 1;
    let now = Date.now();
    t=2;
    if ( moviesCache == null || ((now - lastLoaded) > maxAge )) {        
        lastLoaded = now;
                
        const res  = await fetch('http://localhost:3030/data/movies');
        const data = await res.json();
        moviesCache = data;   
    }

    
    catalog.replaceChildren(...moviesCache.map(createMovieCard));
}

window.getMovies = getMovies;
function createMovieCard(movie) {
    const element = e('div', { className: 'card mb-4' });
    element.innerHTML = `
  <img class="card-img-top"
    src="${movie.img}"
    alt="Card image cap"
    width="400"
  />
  <div class="card-body">
    <h4 class="card-title">${movie.title}</h4>
  </div>
  <div class="card-footer">
    <a data-id=${movie._id} href="#">
      <button type="button" class="btn btn-info">Details</button>
    </a>
  </div>`

  return element;
}

