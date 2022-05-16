const element = document.createElement("div");
element.id = "overlay";

element.innerHTML = `
<div id="modal">
    <p>Are You sure?</p>
    <div>
        <button class="modal-ok">OK</button>
        <button class="modal-cancel">Cansel</button>
    </div>
</div> <p>Are you sure?</p>
`;

element.querySelector('.modal-ok').addEventListener('click', () => onChoice(true));
element.querySelector('.modal-cancel').addEventListener('click', () => onChoice(false));

const msg = element.querySelector('p');
//let callback = null;
let onChoice = null;

//export function showModal(message, cb) {
export function showModal(message) {
    
    msg.textContent = message;
    document.body.appendChild(element);

    return new Promise(callback => {
        onChoice = (choice) => {
            clear();
            callback(choice);        
        }    
    });
}

// function onChoice(choice) {
//     clear();
//     callback(choice);
// }

export function clear() {
    element.remove();
}