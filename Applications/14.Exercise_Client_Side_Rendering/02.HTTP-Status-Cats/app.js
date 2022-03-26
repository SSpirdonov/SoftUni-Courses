import { html, render } from './node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';

//console.log(Array.from(cats));
const section = document.getElementById('allCats');
const listCats = Array.from(cats);
const listTemplate = (listCats) => html`
<ul>
${listCats.map((item) => html`
    <li>
        <img src="./images/${item.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn">Show status code</button>
            <div class="status" style="display: none" id="${item.statusCode}">
                <h4>Status Code: ${item.statusCode}</h4>
                <p>${item.statusMessage}</p>
            </div>
        </div>
    </li>`)}
</ul>
`
render(listTemplate(listCats), section);

section.addEventListener('click', onClick);
function onClick(event) {
    if(event.target.tagName == 'BUTTON') {
        event.preventDefault();
        const div = event.target.parentElement.querySelector('div');
        let pressed = div.style.display;
        if(pressed == 'none') {
            div.style.display = 'block';
            event.target.textContent = 'Hide status code';
        } else {
            div.style.display = 'none';
            event.target.textContent = 'Show status code';
        }
        render(listTemplate(listCats), section);
    }
}