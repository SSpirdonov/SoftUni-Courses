// Заявка за вмъкване на данни
const url = 'http://localhost:3030/jsonstore/collections/students'
const form = document.getElementById('form');
const tbody = document.querySelector('tbody');

showStudents();

form.addEventListener('submit', onSubmitFormData);

async function loadStudents() {
    const response = await fetch(url);
    return await response.json();
}

async function showStudents() {
    const tableResults = document.querySelector('tbody');
    tableResults.replaceChildren();

    Object.values(await loadStudents()).forEach(e => {
        const studentElement = create('tr',
            create('td', e['firstName']),
            create('td', e['lastName']),
            create('td', e['facultyNumber']),
            create('td', e['grade']),
        );
        tableResults.appendChild(studentElement);
    });
}

function create(type, ...content) {
    const element = document.createElement(type);

    for (let item of content) {
        if (typeof item === 'string' || typeof item === 'number') {
            item = document.createTextNode(item);
        }
        element.appendChild(item);
    }
    return element;
}

async function onSubmitFormData(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    // const firstName = formData.get('firstName');         
    // const lastName  = formData.get('lastName');
    // const facultyNumber = formData.get('facultyNumber');
    // const grade = formData.get('grade');
    
    const data = {}
    // const inputData = [...formData.entries()];    // Тези двата реда правят същото като долния
    // inputData.map(row => data[row[0]] = row[1]);  // Тези двата реда правят същото като долния
    const inp = ([...formData.entries()]).map(row => data[row[0]] = row[1]);
    
    try {
        if(inp.some(x => x == '')) {
            throw new Error('All fields must not be empty');
        }    
        const res = await fetch('http://localhost:3030/jsonstore/collections/students', {
            method: 'post',
            headers: {'Content-Type': 'application.json'},
            body: JSON.stringify(data)
        });
        if(res.ok != true) {
            error = await res.json();
            throw new Error(error.message);
        }
        const result = await res.json();
        // console.log(result);
        // console.log(result.firstName);
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        
        const td1= document.createElement('th');        
        td1.innerHTML = `${result.firstName}`;
        tr.appendChild(td1);

        const td2= document.createElement('th');        
        td2.innerHTML = `${result.lastName}`;
        tr.appendChild(td2);

        const td3= document.createElement('th');        
        td3.innerHTML = `${result.facultyNumber}`;
        tr.appendChild(td3);

        const td4= document.createElement('th');        
        td4.innerHTML = `${result.grade}`;
        tr.appendChild(td4);

        form.reset();

    } catch (err) {
        alert(err.message);
    }    
    
}
