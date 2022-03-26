import { createItem, getAllItems } from './api/data.js';
import { html, render } from './node_modules/lit-html/lit-html.js';

mainFunction();

const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

//----------------------------------------------------------------------

async function mainFunction() {
    const select = document.getElementById('menu');
    const allItems = await loadItems();
    const itemsIemplate = (allItems) => html`
    ${allItems.map((item) => html`<option value="${item._id}">${item.text}</option>`)}
    `
    render(itemsIemplate(allItems),select);
} 
//----------------------------------------------------------------------
async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const inputData = form.querySelector('#itemText').value.trim();
    if(inputData.length > 0){        
        addItem(inputData);
        //console.log(curr);
        mainFunction();
    }
    form.reset();

}

//----------------------------------------------------------------------
async function loadItems() {
 const items = await getAllItems();
return Object.values(items);
}
//----------------------------------------------------------------------
async function addItem(item) {    
 const bodyObj = {text: item}   
 const res = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
     method: 'post',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify(bodyObj)
 });
 const data = await res.json();
 console.log(data);

}