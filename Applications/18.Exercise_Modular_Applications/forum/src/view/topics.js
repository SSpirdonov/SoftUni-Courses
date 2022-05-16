import { getAllTopics } from "../api/data.js";
import { html, until } from "../lib.js";

const topicsTemplate = (topicsPromise) => html`
  <h1>Topics</h1>
  <div>
    ${until(topicsPromise, html`<p class="spiner">Loading &hellip;</p>`)}    
  </div>
`;

export function topicsPage(ctx) {
  ctx.render(topicsTemplate(loadTopics()));
}

const topicsPreviewCard = (topic) => html`
  <article class="preview drop">
    <header><a href=${`/topic/${topic._id}`}>${topic.title}</a></header>
    <div>Comments: 23</div>
  </article>
`;

async function loadTopics() {
  const topics = await getAllTopics();
  
  return topics.map(topicsPreviewCard);
}
