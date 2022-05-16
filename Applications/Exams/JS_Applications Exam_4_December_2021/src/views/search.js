import { search } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData} from '../util.js';

const searchTemplate = (onClick, dat, searchButtonClicked, userData) => html`
    <section id="searchPage">
            <h1>Search by Name</h1>

            <div class="search">
                <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
                <button @click=${onClick} class="button-list">Search</button>
            </div>

            <h2>Results:</h2>
            <!--Show after click Search button-->
            ${searchButtonClicked
                ? html `               
                <div class="search-result">
                    <!--If have matches-->
                    ${dat.length > 0
                    ? 
                    dat.map(el => html `
                    <div class="card-box">
                        <img src=${el.imgUrl}>
                        <div>
                            <div class="text-center">
                                <p class="name">Name: ${el.name}</p>
                                <p class="artist">Artist: ${el.artist}</p>
                                <p class="genre">Genre: ${el.genre}</p>
                                <p class="price">Price: ${el.price}</p>
                                <p class="date">Release Date: ${el.date}</p>
                            </div>
                            
                            ${userData
                            ? html `
                            <div class="btn-group">
                                <a href=${`/details/${el._id}`} id="details">Details</a>
                            </div>`
                            :
                            null
                            }    

                        </div>
                    </div> `)
                    :    
                    html` <p class="no-result">No result.</p> ` }
                </div> `
                :
                null                
            }
    </section>
`;

export function searchPage(ctx) {      
    let searchButtonClicked = false;
    let dat = [] ;
    const userData = getUserData();
    ctx.render(searchTemplate(onClick, dat, searchButtonClicked, userData ));       
    
    async function onClick(event) {
        event.preventDefault();  
        searchButtonClicked = true;

        const query = document.getElementById('search-input').value.trim();;
        if(query == '') {
            return alert('The field must not be empty!');
        }
              
        dat = await search(`/data/albums?where=name%20LIKE%20%22${query}%22`);        
        console.log(searchButtonClicked);
        ctx.render(searchTemplate(onClick, dat, searchButtonClicked, userData ));       
    }
}

