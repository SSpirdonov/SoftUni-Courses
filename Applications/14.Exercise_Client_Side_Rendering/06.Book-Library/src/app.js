/*
main module:
    init modules with dependencies
    -rendering
    -communication berween modules

list module:
    display list of books
    control books (edit, delete)

create module:
    control create form

update module:
    control edit form

api module:
    load books
    edit books
    delete book
    create book
*/


import { showCatalog } from './catalog.js';
import { showCreate } from './create.js';
import { showUpdate } from './update.js';
import { render } from './utility.js'


const root = document.body;

const ctx = {
    update
} ;

function update() {
    render([
        showCatalog(ctx),
        showCreate(ctx),
        showUpdate(ctx)
    ], root);
}

update();


