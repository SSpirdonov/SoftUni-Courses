import { editItemById, getDetails } from '../api/data.js';
import { html, until } from '../lib.js';


const editTemplate = (dat, onSubmit) => html`
    <section id="editPage">
            <form @submit=${onSubmit} class="theater-form">
                <h1>Edit Theater</h1>
                <div>
                    <label for="title">Title:</label>
                    <input id="title" name="title" type="text" .value=${dat.title}>
                </div>
                <div>
                    <label for="date">Date:</label>
                    <input id="date" name="date" type="text" .value=${dat.date}>
                </div>
                <div>
                    <label for="author">Author:</label>
                    <input id="author" name="author" type="text" .value=${dat.author}>
                </div>
                <div>
                    <label for="description">Theater Description:</label>
                    <textarea id="description" name="description" .value=${dat.description}></textarea>
                </div>
                <div>
                    <label for="imageUrl">Image url:</label>
                    <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" .value=${dat.imageUrl}>
                </div>
                <button class="btn" type="submit">Submit</button>
            </form>
        </section>
`;

export async function editPage(ctx) {    
    const dat = await getDetails('/data/theaters/' + ctx.params.id);
    
    ctx.render(editTemplate(dat, onSubmit));
    
    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const title = formData.get('title');
        const date = formData.get('date');
        const author = formData.get('author');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');
        

        if([...formData.values()].some(v => v=='')) {
            return alert('All fields are requred!');
        }   

        const data = {
            title,
            date,
            author,
            description,
            imageUrl          
        }

        await editItemById('/data/theaters/' + ctx.params.id, data);
        event.target.reset();
        ctx.page.redirect('/details/' + dat._id);           
    }
}

