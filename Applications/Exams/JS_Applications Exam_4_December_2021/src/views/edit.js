import { editItemById, getDetails } from '../api/data.js';
import { html, until } from '../lib.js';


const editTemplate = (dat, onSubmit) => html`
    <section class="editPage">
            <form @submit=${onSubmit}>
                <fieldset>
                    <legend>Edit Album</legend>

                    <div class="container">
                        <label for="name" class="vhide">Album name</label>
                        <input id="name" name="name" class="name" type="text" .value=${dat.name}>

                        <label for="imgUrl" class="vhide">Image Url</label>
                        <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" .value=${dat.imgUrl}>

                        <label for="price" class="vhide">Price</label>
                        <input id="price" name="price" class="price" type="text" .value=${dat.price}>

                        <label for="releaseDate" class="vhide">Release date</label>
                        <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" .value=${dat.releaseDate}>

                        <label for="artist" class="vhide">Artist</label>
                        <input id="artist" name="artist" class="artist" type="text" .value=${dat.artist}>

                        <label for="genre" class="vhide">Genre</label>
                        <input id="genre" name="genre" class="genre" type="text" .value=${dat.genre}>

                        <label for="description" class="vhide">Description</label>
                        <textarea name="description" class="description" rows="10" cols="10" .value=${dat.description}></textarea>

                        <button class="edit-album" type="submit">Edit Album</button>
                    </div>
                </fieldset>
            </form>
        </section>
`;

export async function editPage(ctx) {    
    const dat = await getDetails('/data/albums/' + ctx.params.id);
    ctx.render(editTemplate(dat, onSubmit));
    
    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const imgUrl = formData.get('imgUrl');
        const price = formData.get('price');
        const releaseDate = formData.get('releaseDate');
        const artist = formData.get('artist');
        const genre = formData.get('genre');
        const description = formData.get('description');

        if([...formData.values()].some(v => v=='')) {
            return alert('All fields are requred!');
        }   

        const data = {
            name,
            imgUrl,
            price,
            releaseDate,
            artist,
            genre,
            description          
        }

        await editItemById('/data/albums/' + ctx.params.id, data);
        event.target.reset();
        ctx.page.redirect('/details/' + dat._id);           
    }
}

