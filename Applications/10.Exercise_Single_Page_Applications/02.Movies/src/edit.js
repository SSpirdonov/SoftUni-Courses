// Initialization
// Find relevant section
// detach section from DOM

import { updateNav } from './app.js';
import { showView } from './dom.js';
import { showHome } from './home.js';
import { showDetails } from './details.js';
let currentId = '';
const userData = JSON.parse(sessionStorage.getItem('userData'));
const section = document.getElementById('edit-movie');
const form = section.querySelector('form');
form.addEventListener('submit', editDetails);

export function showEdit(id) {
    currentId = id;
    showView(section);
}



export async function editDetails(event) {
    event.preventDefault();
    
    const formData = new FormData(form);
    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const imageUrl = formData.get('imageUrl').trim();
    const bodyContent = {};
    if( title == '' && description == '' && imageUrl == '' ) {
        alert('Fill in at least one field');
        return;
    }
    const result = await fetch('http://localhost:3030/data/movies/' + currentId);
    const dataRead = await result.json();

    if( title == '' ) {
        bodyContent.title = dataRead.title;
    } else {
        bodyContent.title = title;
    }
    if( description == '' ) {
        bodyContent.description = dataRead.description;
    } else {
        bodyContent.description = description;
    }
    if( imageUrl == '' ) {
        bodyContent.img = dataRead.img;
    } else {
        bodyContent.img = imageUrl;

    }
    
    "https://miro.medium.com/max/735/1*akkAa2CcbKqHsvqVusF3-w.jpeg"
    

    const res = await fetch('http://localhost:3030/data/movies/' + currentId, {
       method: 'put',
       headers: { 'Content-Type': 'Application/json', 'X-Authorization': userData.token },
       //body: JSON.stringify( {img: imageUrl, title: title, description: description})
       body: JSON.stringify( bodyContent)
    });
    const data = await res.json();
    //console.log(data);
    form.reset();    
    updateNav();
    showDetails(currentId);


}