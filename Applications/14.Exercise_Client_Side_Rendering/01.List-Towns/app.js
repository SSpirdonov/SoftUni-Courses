import { html, render } from './node_modules/lit-html/lit-html.js';
const rendTarget = document.getElementById('root');
const form = document.querySelector('form');

let listItems = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    listItems = formData.get('towns').trim();
    if(listItems != '') {
        listItems = listItems.split(',').map(el => el.trim());
        render(listTemplate(listItems), rendTarget);
    }
});

const listTemplate = (listIitems) => html`
<ul>
    ${listIitems.map((item) => html`<li>${item}</li>`)}
</ul>
`;

