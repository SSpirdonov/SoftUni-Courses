import { createComment, getAllComments} from "../api/data.js"
import { html, until } from '../lib.js';


export async function getComments(ctx) {    
    const comments =  await getAllComments(`/data/comments?where=gameId%3D%22${ctx.params.id}%22`);
    return comments;
}

export const addCommentTemplate = (ctx) => html`
<article class="create-comment">
    <label>Add new comment:</label>
    <form @submit=${onSubmit.bind(null,ctx)} class="form">
        <textarea name="comment" placeholder="Comment......"></textarea>
        <input class="btn submit" type="submit" value="Add Comment">
    </form>
</article>
`
async function onSubmit(ctx, event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const comment = formData.get('comment');
    const gameId = ctx.params.id;
    if(comment == '') {
        return alert('All fields are requred!');
    }
    console.log(comment);
    console.log(gameId);
    const data = {
        gameId,
        comment,
    }
        
    await createComment('/data/comments', data);
    // ctx.updateUserNav();
    event.target.reset();
    ctx.page.redirect('/details/'  + gameId );
    
}

export const listCommentsTemplate = (comments) => html`
    ${comments.map( el => html `
        <li class="comment">
            <p>${el.comment}.</p>
        </li>
    `)}
    
    
`