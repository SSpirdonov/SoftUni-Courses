import { html, until } from '../lib.js';
import { getUserData} from '../util.js';
import { getAllItemsCatalog } from '../api/data.js';

const catalogTemplate = (dat, userData) => html`
    <section id="catalogPage">
        <h1>All Albums</h1>
        ${dat.length>0
        ?
            dat.map((el) => html `
                <div class="card-box">
                <img src=${el.imgUrl}>
                <div>
                    <div class="text-center">
                        <p class="name">Name: ${el.name}</p>
                        <p class="artist">Artist: ${el.artist}</p>
                        <p class="genre">Genre: ${el.genre}</p>
                        <p class="price">Price: $${el.price}</p>
                        <p class="date">Release Date: ${el.releaseDate}</p>
                    </div>
                    ${userData 
                    ? 
                        html `<div class="btn-group">
                            <a href=${`/details/${el._id}`} id="details">Details</a>
                        </div>`
                    : null
                    }                    
                </div>
            </div>
            `)
        :
            html `<p>No Albums in Catalog!</p>`    
        }    
            

    </section>
`;

export async function catalogPage(ctx) {
  const dat = await getAllItemsCatalog('/data/albums?sortBy=_createdOn%20desc&distinct=name');  
  const userData = getUserData();
  ctx.render(catalogTemplate(dat,userData));
}
