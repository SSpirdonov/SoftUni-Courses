// x  load all books
// x  create book
// x  update book
// x  delete book

// x  handle create form
// handle edit form

// load book for editing
// x  handle delete button

// initialization

//--------------------- initialization------------------------------------------------

const tbody = document.querySelector('tbody');
const createForm = document.getElementById('createForm');
const editForm = document.getElementById('editForm');
document.getElementById('loadBooks').addEventListener('click', loadBooks);
createForm.addEventListener('submit', onCreate);
editForm.addEventListener('submit', onEditSubmit);
tbody.addEventListener('click', onTableClick);

loadBooks();
//------------------------------------------------------------------------------------
function onTableClick(event) {
    
    if(event.target.className == 'delete') {
        onDelete(event.target);
    } else if(event.target.className == 'edit') {
        onEdit(event.target);

    }
}
    //---------------------------------------------
async function onDelete(button) {
    const id = button.parentElement.dataset.id;
    await deleteBook(id);
    button.parentElement.parentElement.remove();
}
    //---------------------------------------------
async function onEdit(button){
    const id = button.parentElement.dataset.id;
    const book = await loadBookByID(id);
    
    createForm.style.display = 'none';
    editForm.style.display = 'block';
    
    editForm.querySelector('[name = "id"]').value = id;
    editForm.querySelector('[name = "author"]').value = book.author;
    editForm.querySelector('[name = "title"]').value = book.title;
}
    //---------------------------------------------
async function onEditSubmit(event) {
    event.preventDefault();    
    const formData = new FormData(event.target);         
    
    const id = formData.get('id');                                                         
    const author = formData.get('author');               
    const title = formData.get('title');                 

    const result = await updateBook(id,{author, title}); 
    event.target.reset();                                

    createForm.style.display = 'block';
    editForm.style.display = 'none';
    loadBooks();

}    
    //---------------------------------------------
async function loadBookByID(id) {
    const book =  await request('http://localhost:3030/jsonstore/collections/books/' + id);

    return book;
}

//------------------------------------------------------------------------------------
async function onCreate(event) {
    event.preventDefault();
    const formData = new FormData(event.target);      // event.target ни дава реф. към самата форма
    const author = formData.get('author');            // Четем  името на автора  от input полето на формата 
    const title = formData.get('title');              // Четем  името на книгата от input полето на формата  

    const result = await createBook({author, title}); // Създаване на нова книга в БД
    tbody.appendChild(createRow(result._id, result)); // Добавяне на новата книга на екрана, т.е. в DOM
    event.target.reset();                             // Зачиствне на input полетата във формата  

}

//------------------------------------------------------------------------------------
async function loadBooks() {
    const books =  await request('http://localhost:3030/jsonstore/collections/books');

    const result = Object.entries(books).map(([id, book]) => createRow(id, book));
    //console.log(...result);
    tbody.replaceChildren(...result);
}
    //---------------------------------------------
function createRow(id, book) {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td data-id=${id}>
        <button class="edit">Edit</button>
        <button class= "delete">Delete</button>
    </td>`;

    return row;
}

//------------------------------------------------------------------------------------
async function createBook(book) {
    const result = await request('http://localhost:3030/jsonstore/collections/books', {
        method: 'post',
        body: JSON.stringify(book)
    });

    return result;
}

//------------------------------------------------------------------------------------
async function updateBook(id, book) {
    const result = await request('http://localhost:3030/jsonstore/collections/books/' + id , {
        method: 'put',
        body: JSON.stringify(book)
    });

    return result;
}

//------------------------------------------------------------------------------------
async function deleteBook(id) {
    const result = await request('http://localhost:3030/jsonstore/collections/books/' + id , {
        method: 'delete',
    });

    return result;
}

//------------------------------------------------------------------------------------
async function request(url, options) {
    if( options && options.body != undefined) {
        Object.assign(options,{headers: {'Content-Type': 'application/json'}});

    }
    
    const response = await fetch(url, options);
    
    if ( response.ok != true ) {
        const error = await response.json();
        alert (error.message);
        throw new Error(error.message);        
    }

    const data = await response.json();

    return data;
}
