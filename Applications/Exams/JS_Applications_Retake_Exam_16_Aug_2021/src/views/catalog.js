import { html, until } from '../lib.js';
import { getUserData} from '../util.js';
import { getAllGamesCatalog } from '../api/data.js';

const catalogTemplate = (dat) => html`
    <section id="catalog-page">
            <h1>All Games</h1>
            <!-- Display div: with information about every game (if any) -->
            ${dat.length>0
            ? 
                dat.map((el) => html `
                <div class="allGames">
                    <div class="allGames-info">
                        <img src=${el.imageUrl}>
                        <h6>${el.category}</h6>
                        <h2>${el.title}</h2>
                        <a href=${`/details/${el._id}`} class="details-button">Details</a>
                    </div>
                </div>
                `)
            :
                html `<h3 class="no-articles">No articles yet</h3>`    
            } 
        </section>
`;

export async function catalogPage(ctx) {
  let dat = await getAllGamesCatalog('/data/games?sortBy=_createdOn%20desc');  
  
  ctx.render(catalogTemplate(dat));
}
