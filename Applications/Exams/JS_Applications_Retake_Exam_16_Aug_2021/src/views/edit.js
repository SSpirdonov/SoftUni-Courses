import { editPageById, getDetails } from '../api/data.js';
import { html, until } from '../lib.js';


const editTemplate = (dat, onSubmit) => html`
    <section id="edit-page" class="auth">
            <form @submit=${onSubmit} id="edit">
                <div class="container">

                    <h1>Edit Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" .value=${dat.title}>

                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" .value=${dat.category}>

                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" .value=${dat.maxLevel}>

                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" .value=${dat.imageUrl}>

                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary" .value=${dat.summary}></textarea>
                    
                    <input class="btn submit" type="submit" value="Edit Game">

                </div>
            </form>
        </section>
`;

export async function editPage(ctx) {    
    const dat = await getDetails('/data/games/' + ctx.params.id);
    ctx.render(editTemplate(dat, onSubmit));
    
    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const title = formData.get('title');
        const category = formData.get('category');
        const maxLevel = formData.get('maxLevel');
        const imageUrl = formData.get('imageUrl');
        const summary = formData.get('summary');

        if([...formData.values()].some(v => v=='')) {
            return alert('All fields are requred!');
        }   

        const data = {
            title,
            category,
            maxLevel,
            imageUrl,
            summary
        }

        await editPageById('/data/games/' + ctx.params.id, data);
        event.target.reset();
        ctx.page.redirect('/details/' + dat._id);
                
    }
}

