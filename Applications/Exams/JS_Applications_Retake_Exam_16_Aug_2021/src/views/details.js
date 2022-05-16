import { html, until } from '../lib.js';
import { getUserData} from '../util.js';
import { deleteItem, getAllComments, getDetails } from '../api/data.js';
import { addCommentTemplate, getComments, listCommentsTemplate } from './comments.js';


const detailsTemplate = (dat, onDelete, isOwner, comments, userData, ctx) => html`
    <section id="game-details">
        <h1>Game Details</h1>
        <div class="info-section">
         <div class="game-header">
            <img class="game-img" src=${dat.imageUrl} />
            <h1>${dat.title}</h1>
            <span class="levels">${dat.maxLevel}</span>
            <p class="type">${dat.category}</p>
          </div>
         <p class="text" .textContent=${dat.summary}></p>
         <!-- Bonus ( for Guests and Users ) -->
            <div class="details-comments">
                <h2>Comments:</h2>
                ${comments.length>0
                ? html`
                <ul>
                    <!-- list all comments for current game (If any) -->
                    ${listCommentsTemplate(comments)}
                    
                </ul>`    
                :
                    html `<p class="no-comment">No comments.</p>`
                }                
            </div>
            <!-- Edit/Delete buttons ( Only for creator of this game )  -->
            ${isOwner 
                ? html `
                    <div class="buttons">
                        <a href="/edit/${dat._id}" class="button">Edit</a>
                        <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
                    </div>` 
                : null
            }
        </div>
        <!-- Bonus -->
        <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
        ${userData && !isOwner ? addCommentTemplate(ctx) : null}                    
    </section>
`;

export async function detailsPage(ctx, onDelete) {

  const dat = await getDetails('/data/games/' + ctx.params.id);    
  const userData = getUserData();
  const isOwner =  userData &&  userData.id == dat._ownerId;
  const comments = await getComments(ctx);  
  ctx.render(detailsTemplate(dat, onDelete, isOwner, comments, userData, ctx));
    //---------------------------
    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this item?');
        if (choice) {
            await deleteItem('/data/games/' + ctx.params.id);
            ctx.page.redirect('/');
        }
    }
}


