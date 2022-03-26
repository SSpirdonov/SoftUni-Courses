const sectionEl = document.getElementById('main');
async function solution() {
    const dataArr = await getTitles();
    let len = dataArr.length;
    for(let i = 0; i < len; i++){
        loadInit(dataArr[i].title,dataArr[i]._id);
    }
}

solution();

sectionEl.addEventListener('click', onMoreClick)
//-----------------------------------------------------------------------------------------
async function onMoreClick(ev) {    
    if (ev.target.tagName == 'BUTTON'){
        
        const divAccordion = ev.target.parentElement.parentElement;
        
        if(ev.target.textContent == 'MORE'){
            const content = await getData(ev.target.id);
            const divExtra = e('div');
            const pEl = e('p',{},content);
            divAccordion.appendChild(divExtra);
            divExtra.appendChild(pEl);            
            ev.target.textContent = 'LESS';
        } else {            
            const divExtra = divAccordion.querySelectorAll('div')[1];
            divExtra.remove();
            ev.target.textContent = 'MORE';
        }        
    }
}
//-----------------------------------------------------------------------------------------
async function getData(id) {
    const url = 'http://localhost:3030/jsonstore/advanced/articles/details/' + id;
    const res = await fetch(url);
    const data = await res.json();    
    return data.content;
}
//-----------------------------------------------------------------------------------------
function loadInit(title,id){

    const divAccordion = e('div',{className:'accordion'});
    sectionEl.appendChild(divAccordion);
    const divHead = e('div',{className: 'head'});
    divAccordion.appendChild(divHead);
    const spanTitle = e('span',{},title);
    divHead.appendChild(spanTitle);
    const btnEl = e('button',{className: 'button',id: id},'MORE');
    divHead.appendChild(btnEl);
}
//-----------------------------------------------------------------------------------------
async function getTitles() {
    const url = ' http://localhost:3030/jsonstore/advanced/articles/list';
    const res = await fetch(url);
    const data = await res.json();    
    return data;
}
//-----------------------------------------------------------------------------------------
function e(type, attr, ...content) {
    const element = document.createElement(type);
    for (let prop in attr) {
        element[prop] = attr[prop];
    }
    for (let item of content) {
        if (typeof item == 'string' || typeof item == 'number'){
            item = document.createTextNode(item);
        }
        element.appendChild(item);
    }
    return element;
}



