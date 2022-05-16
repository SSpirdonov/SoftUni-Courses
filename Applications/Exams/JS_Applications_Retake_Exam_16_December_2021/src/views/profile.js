import { html, until } from "../lib.js";
import { getUserData } from "../util.js";
import { getItemsByUserId } from "../api/data.js";

const profileTemplate = (dat, userData) => html`
  <section id="profilePage">
    <div class="userInfo">
      <div class="avatar">
        <img src="./images/profilePic.png" />
      </div>
      <h2>${userData.email}</h2>
    </div>
    <div class="board">
      ${dat.length > 0
        ? dat.map(
            (el) => html` <!--If there are event-->
              <div class="eventBoard">
                <div class="event-info">
                  <img src=${el.imageUrl} />
                  <h2>${el.title}</h2>
                  <h6>${el.date}</h6>
                  <a href="/details/${el._id}" class="details-button"
                    >Details</a
                  >
                </div>
              </div>`
          )
        : html` <!--If there are no event-->
            <div class="no-events">
              <p>This user has no events yet!</p>
            </div>`}
    </div>
  </section>
`;

export async function profilePage(ctx) {
  const userData = getUserData();

  const dat = await getItemsByUserId(`/data/theaters?where=_ownerId%3D%22${userData.id}%22&sortBy=_createdOn%20desc`);
  console.log(dat);
  ctx.render(profileTemplate(dat, userData));
}
