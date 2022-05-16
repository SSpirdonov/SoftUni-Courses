import { input } from "../common/input.js";
import { html } from "../lib.js";
import { createSumbitHandler } from "../util.js";

const createTemplate = (onSubmit, errorMsg, errors, values) => html`
  <div class="drop main">
    <header><h1>Create New Topic</h1></header>
    <form @submit=${onSubmit}>
      ${errorMsg ? html`<P class="error-msg">${errorMsg}</P>` : null}
      ${input('Topic Title', 'text', 'title', values.title, errors.title)}
      ${input('Content', 'textarea', 'content', values.content, errors.content)}
      <div class="center">
        <input class="action" type="submit" value="Publish Topic" />
      </div>
    </form>
  </div>
`;

export function createPage(ctx) {
  update();
  
  function update(errorMsg = '', errors = {}, values = {}) {
    ctx.render(createTemplate(
      createSumbitHandler(onSubmit, 'email', 'password'),
      errorMsg,
      errors,
      values
    ));        
  }

  async function onSubmit(data) {  
    // try {
    //   await login(data.email, data.password);  
    //   ctx.updateUserNav();
    //   ctx.page.redirect('/topics');

    // } catch (err) {
    //   const message = err.message || err.error.message;
    //   update(message, data.email);
    // }

  } 

}
