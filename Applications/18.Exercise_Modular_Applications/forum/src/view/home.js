import { html } from "../lib.js";

const homeTemplate = () => html`
  <h1>Scripters home</h1>
  <div class="splash drop">
    <p>Welcome to Scripters Forum!</p>
    <a href="topics">Browse User Topics</a>
  </div>
`;

export function homePage(ctx) {
    ctx.render(homeTemplate());
}
