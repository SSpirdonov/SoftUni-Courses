import { html, until } from "../lib.js";
import { getUserData } from "../util.js";
import { deleteItem, getDetails } from "../api/data.js";

const detailsTemplate = (dat, onDelete, isOwner, userData) => html`
  <section id="detailsPage">
    <div class="wrapper">
      <div class="albumCover">
        <img src=${dat.imgUrl} />
      </div>
      <div class="albumInfo">
        <div class="albumText">
          <h1>Name: ${dat.name}</h1>
          <h3>Artist: ${dat.artist}</h3>
          <h4>Genre: ${dat.genre}</h4>
          <h4>Price: ${dat.price}</h4>
          <h4>Date: ${dat.date}</h4>
          <p>${dat.description}</p>
        </div>

        <!-- Only for registered user and creator of the album-->        

        ${isOwner
          ? html` <div class="actionBtn">
              <a href="/edit/${dat._id}" class="edit">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" class="remove"
                >Delete</a
              >
            </div>`
          : null}
      </div>
    </div>
  </section>
`;

export async function detailsPage(ctx, onDelete) {
  const dat = await getDetails("/data/albums/" + ctx.params.id);
  const userData = getUserData();
  const isOwner = userData && userData.id == dat._ownerId;

  ctx.render(detailsTemplate(dat, onDelete, isOwner, userData));
  //---------------------------
  async function onDelete() {
    const choice = confirm("Are you sure you want to delete this item?");
    if (choice) {
      await deleteItem("/data/albums/" + ctx.params.id);
      ctx.page.redirect("/catalog");
    }
  }
}
