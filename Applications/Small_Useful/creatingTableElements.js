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