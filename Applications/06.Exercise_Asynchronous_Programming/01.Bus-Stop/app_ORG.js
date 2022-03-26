async function getInfo() {
    const stopNameElement = document.getElementById('stopName') ;
    const timetableElement= document.getElementById('buses') ;
    const stopId = document.getElementById('stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    const field = document.getElementById('stopName')
    const buton = document.getElementById('submit')
    console.log(field, buton);
    field.disabled = true;
    buton.disabled = true;
    try{
        // Долният ред изтрива съдържанието на елемента. Равносилно е на timetableElement.innerHTML = ''
        timetableElement.replaceChildren();
        stopNameElement.textContent = 'Loading ...';

        const res  = await fetch(url);
        if(res.status !== 200) {
            throw new Error ('StopID not found');
        }
        
        const data = await res.json();    
        
        stopNameElement.textContent = data.name;
        Object.entries(data.buses).forEach( b => {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;
            timetableElement.appendChild(liElement);
        })
    } catch(error) {
        stopNameElement.textContent = 'Error';
    }
    field.disabled = false;
    buton.disabled = false;   
}