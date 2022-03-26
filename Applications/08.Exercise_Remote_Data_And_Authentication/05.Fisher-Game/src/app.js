let userData = null;

window.addEventListener('DOMContentLoaded', () => {

    userData = JSON.parse(sessionStorage.getItem('userData'));
    if( userData != null ) {
        document.getElementById('guest').style.display = 'none';
        document.querySelector('#addForm .add').disabled = false;
    } else {
        document.getElementById('user').style.display = 'none';
    }

    document.querySelector('.load').addEventListener('click', loadData);

    document.getElementById('addForm').addEventListener('submit',onCreateSubmit);
    document.getElementById('logout').addEventListener('click',onLogout);
    document.getElementById('catches').addEventListener('click', onUpdateDelete);

});

async function onUpdateDelete(event) {
    const et = event.target;
    if(et.className == 'update') {        
        await onUpdate(et);
    } else if(et.className == 'delete') {        
        await onDelete(et);

    }
    
}

async function onUpdate(et) {
    //console.log('Update buttoun clicked', et.className);
    const id = et.dataset.id;
    //console.log(id);
    const inputData = Array.from(et.parentElement.querySelectorAll('input'));
    const data = {};
    inputData.map(row => data[row.className] = row.value );
    //console.log(data);
    try {
        if(Object.values(data).some(x => x == '')) {
            throw new Error('All fields are required !');
        }

        const res = await fetch('http://localhost:3030/data/catches/'+ id, {
            method: 'put',
            headers: {'Content-Type': 'application/json', 'X-Authorization': userData.token},
            body: JSON.stringify(data)
        });
        if(res.ok != true) {
            const error = await res.json();
            throw new Error(error.message);
        }
        //loadData();

    } catch (err) {
        alert(err.message);
    }



}

async function onDelete(et) {
    //console.log('Delete buttoun clicked', et.className);
    const id = et.dataset.id;
    try {
        const res = await fetch('http://localhost:3030/data/catches/'+ id, {
            method: 'delete',
            headers: {'X-Authorization': userData.token}
        });
        //loadData();
        et.parentElement.remove();

    } catch (err) {
        alert(err.message);
    }
}


async function onCreateSubmit(event) {
    event.preventDefault();
    if(!userData){
        window.location = '/login.html';
        return;
    }

    const formData = new FormData(event.target);
    const data = [...formData.entries()].reduce((a,[k,v]) => Object.assign(a, {[k]: v}),{});
    
    try {
        if(Object.values(data).some(x => x == '')) {
            throw new Error('All fields are required !');
        }

        const res = await fetch('http://localhost:3030/data/catches',{
            method: 'post',
            headers: {'Content-Type': 'application/json', 'X-Authorization': userData.token},
            body: JSON.stringify(data)
        });
        if(res.ok != true) {
            const error = await res.json();
            throw new Error(error.message);
        }


        event.target.reset(); 
        loadData();

    } catch (err) {
        alert(err.message);
    }

}

async function loadData() {
    const res = await fetch('http://localhost:3030/data/catches');
    const data = await res.json();
    //console.log(data);
    document.getElementById('catches').replaceChildren(...data.map(createPreview));
}

function createPreview(item) {
    const isOwner = ( userData && item._ownerId == userData.id );

    if( userData && item._ownerId == userData.id ) {
        
        //console.log(`Curren user ${userData.userName} is owner of item `, item.angler);
    }

    const element = document.createElement('div');
    element.className = 'catch';
    element.innerHTML = 
`<label>Angler</label>
<input type="text" class="angler" value="${item.angler}" ${!isOwner ? 'disabled' : ''}>
<label>Weight</label>
<input type="text" class="weight" value="${item.weight}" ${!isOwner ? 'disabled' : ''}>
<label>Species</label>
<input type="text" class="species" value="${item.species}" ${!isOwner ? 'disabled' : ''}>
<label>Location</label>
<input type="text" class="location" value="${item.location}" ${!isOwner ? 'disabled' : ''}>
<label>Bait</label>
<input type="text" class="bait" value="${item.bait}" ${!isOwner ? 'disabled' : ''}>
<label>Capture Time</label>
<input type="number" class="captureTime" value="${item.captureTime}" ${!isOwner ? 'disabled' : ''}>
<button class="update" data-id="${item._id}" ${!isOwner ? 'disabled' : ''}>Update</button>
<button class="delete" data-id="${item._id}" ${!isOwner ? 'disabled' : ''}>Delete</button>`

return element;
}

async function onLogout() {
    
    const res = await fetch('http://localhost:3030/users/logout', {headers: {'X-Authorization': `${userData.token}`}});
    //console.log(res.statusText);
    if (res.status === 204) {
        sessionStorage.clear();
        window.location = '/index.html'
    }    

}