window.addEventListener('load', solve);

function solve() {
    const typeProduct = document.getElementById('type-product');
    const description = document.getElementById('description');
    const clientName = document.getElementById('client-name');
    const clientPhone = document.getElementById('client-phone');
    const sendFormBtn = document.querySelector('#right button');
    const receivedOrders = document.getElementById('received-orders');
    const completedOrders = document.getElementById('completed-orders');

    sendFormBtn.addEventListener('click', sendForm);

    function sendForm(e) {
        e.preventDefault();

        if( description.value !='' && clientName.value != '' && clientPhone != '' ) {
            let div = document.createElement('div');
            div.classList.add('container');
            div.innerHTML = `<h2>Product type for repair: ${typeProduct.value}</h2>
                             <h3>Client information: ${clientName.value}, ${clientPhone.value}</h3>
                             <h4>Description of the problem: ${description.value}</h4>
                             <button class = "start-btn">Start repair</button>
                             <button class = "finish-btn" disabled>Finish repair</button>`;

            receivedOrders.appendChild(div);
            description.value ='';
            clientName.value = '';
            clientPhone.value= '';
            startBtn = div.getElementsByClassName("start-btn")[0];
            finishBtn = div.getElementsByClassName("finish-btn")[0];
            startBtn.addEventListener('click', startBtnClick);
            finishBtn.addEventListener('click', finishBtnClick);
        }
    }

    function startBtnClick(e) {        
        e.target.disabled = true;
        e.target.nextElementSibling.disabled = false;
    }
    function finishBtnClick(e) {
        e.target.disabled = true;
        const order = e.target.parentElement;
        
        completedOrders.appendChild(order);
        const btn1 = order.getElementsByClassName("start-btn")[0];
        const btn2 = order.getElementsByClassName("finish-btn")[0];
        btn1.remove();
        btn2.remove();
    }

    const clearBtn = document.getElementsByClassName('clear-btn')[0];
    clearBtn.addEventListener('click', clearBtnClick);
    function clearBtnClick(e) {
        completedOrders.innerHTML = "";
        completedOrders.innerHTML = `
                                     <h2>Completed orders:</h2>
                                     <img src="./style/img/completed-order.png">
                                     <button class="clear-btn">Clear</button>
                                     `;
    }
}