import { html, until } from '../lib.js';
import { getUserData} from '../util.js';
import { getAllGamesHome } from '../api/data.js';

const homeTemplate = (dat) => html`
  <section id="welcome-world">

<div class="welcome-message">
    <h2>ALL new games are</h2>
    <h3>Only in GamesPlay</h3>
</div>
<img src="./images/four_slider_img01.png" alt="hero">

<div id="home-page">


    <h1>Latest Games</h1>

    <!-- Display div: with information about every game (if any) -->
    
    ${dat.length>0 
    ? 
        dat.map((el) => html `
            <div class="game">
            <div class="image-wrap">
                <img src=${el.imageUrl}>
            </div>
            <h3>${el.title}</h3>
            <div class="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <div class="data-buttons">
                <a href=${`/details/${el._id}`} class="btn details-btn">Details</a>
            </div>
        </div>
        `)
    :
        html `<p class="no-articles">No games yet</p>`    
    }    

</div>
</section>
`;

export async function homePage(ctx) {
  let dat = await getAllGamesHome('/data/games?sortBy=_createdOn%20desc&distinct=category');
  dat = dat.slice(0,3);
  ctx.render(homeTemplate(dat));
  
  
}
