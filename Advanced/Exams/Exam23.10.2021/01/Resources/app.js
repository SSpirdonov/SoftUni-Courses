window.addEventListener('load', solve);

function solve() {
    const [genre, name, author, date] = document.querySelectorAll('form input')
    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', addClick);
    const labels = document.querySelectorAll('label');
    const inpFields = document.querySelectorAll('input');
    const allHits = document.querySelector('.all-hits-container');
    const savedContainer = document.querySelector('.saved-container');
    let totalLikesText = document.getElementById('total-likes').getElementsByTagName('p')[0];
    let totalLikesTextTC = totalLikesText.textContent;
    let totalLikesNumber = Number(totalLikesTextTC[totalLikesTextTC.length-1]);
    
    function addClick(e) {
        e.preventDefault();
        let fillFields = true;
        for (let i = 0; i < inpFields.length; i++) {
            if(inpFields[i].value === '') {
                fillFields = false;
            }
        }
        let allHitsDiv;
        if(fillFields) {
            allHitsDiv = document.createElement('div');
            allHitsDiv.className = 'hits-info';

            allHitsDiv.innerHTML = `<img src = "./static/img/img.png">
<h2>Genre:${inpFields[0].value}</h2>
<h2>Name:${inpFields[1].value}</h2>
<h2>Autor:${inpFields[2].value}</h2>
<h3>Date:${inpFields[3].value}</h3>
<button class="save-btn">Save song</button>
<button class="like-btn">Like song</button>
<button class="delete-btn">Delete</button>`;            
    
            allHits.appendChild(allHitsDiv);   
            [genre, name, author, date].forEach(e => e.value = '');
        }
        allHits.addEventListener('click', onAllFieldsClick);
        function onAllFieldsClick(e) {
            let child = e.target.parentElement;
            if(e.target === allHitsDiv.getElementsByTagName('button')[0]){                
                savedContainer.appendChild(child);
                child.removeChild(child.getElementsByTagName('button')[0]);
                child.removeChild(child.getElementsByTagName('button')[0]);
                let deleteButton = child.getElementsByTagName('button')[0];
                deleteButton.addEventListener('click', delFinal);
                function delFinal(e) {
                    let el = e.target.parentElement;
                    el.parentElement.removeChild(el);
                }


            }
            if(e.target === allHitsDiv.getElementsByTagName('button')[1]){
                //console.log('Натиснат бутон Like в allHiths');
                totalLikesNumber++;
                totalLikesTextTC = totalLikesTextTC.slice(0,totalLikesTextTC.length - 2) + ' ' + totalLikesNumber;
                //console.log(totalLikesTextTC);
                totalLikesText.textContent = totalLikesTextTC;
                e.target.disabled = true;

            }
            if(e.target === allHitsDiv.getElementsByTagName('button')[2]){                                
                child.parentNode.removeChild(child);
            }
            
        }
        [genre, name, author, date].forEach(e => e.value = '');
        
    }
    
}