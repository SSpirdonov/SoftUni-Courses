import { html, until } from "../lib.js";
import { getUserData } from "../util.js";
import { getCurUserLikes, addLike, deleteItem, getAllLikes, getDetails } from "../api/data.js";





const detailsTemplate = (dat, onDelete, isOwner, userData, datLikes, onLikeClick, datCurUserLikes, likeButtonClicked) => html`
  <section id="detailsPage">
    <div id="detailsBox">
      <div class="detailsInfo">
        <h1>Title: ${dat.title}</h1>
        <div>
          <img src=${dat.imageUrl}
/>
        </div>
      </div>
  
      <div class="details">
        <h3>Theater Description</h3>
        <p> ${dat.description} </p>
        <h4>Date: ${dat.date}</h4>
        <h4>Author: ${dat.author}</h4>
        <div class="buttons">
          ${isOwner 
            ? html`
              <a @click=${onDelete} class="btn-delete" href="javascript:void(0)">Delete</a>
              <a class="btn-edit" href="/edit/${dat._id}">Edit</a> `
            : 
            null
          }
          ${userData && !isOwner && !datCurUserLikes > 0
            ? html `
              <a @click=${onLikeClick} class="btn-like" href="javascript:void(0)">Like</a>`
            :
            null
          }
        </div>
        <p class="likes">Likes: ${datLikes}</p>
        
      </div>
    </div>
  </section>
`;

export async function detailsPage(ctx, onDelete, onLikeClick) {
  const userData = getUserData();
  const theaterId = ctx.params.id ;
  let likeButtonClicked = false;
  let userId = null;
  if(userData) {
    userId =userData.id;
  }
  //const dat = await getDetails("/data/theaters/" + theaterId);
  //const datLikes = await getAllLikes(`/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`);
  
  const [dat, datLikes, datCurUserLikes] = await Promise.all([getDetails("/data/theaters/" + theaterId),
                                 getAllLikes(`/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`),
                                 getCurUserLikes(`/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`)]);
  
  
  const isOwner = userData && userId == dat._ownerId;  
  
  ctx.render(detailsTemplate(dat, onDelete, isOwner, userData, datLikes, onLikeClick, datCurUserLikes));
  //---------------------------
  async function onDelete() {
    const choice = confirm("Are you sure you want to delete this item?");
    if (choice) {
      await deleteItem("/data/theaters/" + ctx.params.id);
      ctx.page.redirect("/");
    }
  }
  //---------------------------
  async function onLikeClick(event) {
    event.preventDefault();
    
    await addLike('/data/likes', { theaterId });
    ctx.page.redirect(`/details/${theaterId}`);
  }
}
