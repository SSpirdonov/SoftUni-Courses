// Initialization
// Find relevant section
// detach section from DOM

import { updateNav } from './app.js';
import { showView } from './dom.js';
import { showHome } from './home.js';

const userData = JSON.parse(sessionStorage.getItem('userData'));
const section = document.getElementById('add-movie');
const form = section.querySelector('form');
form.addEventListener('submit', onCreate);

export function showCreate() {
    showView(section);
}

async function onCreate(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const imageUrl = formData.get('imageUrl').trim();
    if( title == '' || description == '' || imageUrl == '' ) {
        alert('All fields must be filled in');
        return;
    }

    //"https://miro.medium.com/max/735/1*akkAa2CcbKqHsvqVusF3-w.jpeg"
    
    const res = await fetch('http://localhost:3030/data/movies', {
       method: 'post',
       headers: { 'Content-Type': 'Application/json', 'X-Authorization': userData.token },
       body: JSON.stringify( { img: imageUrl, title: title, description: description } )
    });
    // const data = await res.json();
    // console.log(data);
    form.reset();    
    updateNav();
    showHome();
}




