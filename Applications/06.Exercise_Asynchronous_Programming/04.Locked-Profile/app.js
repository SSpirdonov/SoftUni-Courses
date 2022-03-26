

function lockedProfile() {
    const main = document.getElementById('main')
    start();
    main.addEventListener('click', onClick);
}
//------------------------------------------------------------------------
function onClick(e) {
      if(e.target.tagName === 'BUTTON'){
            //console.log(e.target);
            const state = e.target.parentElement.querySelector('input');
            const divHdn= e.target.parentElement.querySelector('div')
            if(!state.checked){
                  if(e.target.textContent == 'Show more'){
                        //divHdn.className = '';           // И така пак работи
                        divHdn.classList.remove('hiddenInfo');
                        e.target.textContent = 'Hide it';
                  } else {
                        //divHdn.className = 'hiddenInfo'; // И така пак работи
                        e.target.textContent = 'Show more';
                        divHdn.classList.add('hiddenInfo');

                  }
            }
      }
      //if(e.target.tagName == 'INPUT'){
      //       console.log(e.target.tagName);
      //       console.log(e.target.checked);
      //       console.log(e.target.type);
      //       console.log(e.target.value);
      //       console.log(e.target.name);
      //       console.log(e.target.parentElement.querySelector('input').checked);
      //    const etp =  e.target.parentElement;
           
            
      //       console.log('________________________');

      //}


}


//------------------------------------------------------------------------
async function start() {
    
    main.replaceChildren();
    
    const dataArr = await getProfile();
    const len = dataArr.length;
    for(let i = 0; i < len; i++){
      createUserCard(i,dataArr[i].username,dataArr[i].email,dataArr[i].age);
      //console.log(dataArr[i].username + ':  ' + dataArr[i].email + ':  ' + dataArr[i].age);
    }
    
    
}
//------------------------------------------------------------------------
function createUserCard(i,userName,userEmail,userAge) {

    let rbName   = `user${i}Locked`; // user{i}Locked
    let usName   = `user${i}Name`; // user{i}Name
    let uEmail   = `user${i}Email`; // user{i}Email
    let usrAge   = `user${i}Age`; // user{i}Email
      const divEl = document.createElement('div'); 
            divEl.setAttribute("class", "profile");
            main.appendChild(divEl);
      const imgEl = document.createElement('img');
            imgEl.setAttribute("src", "./iconProfile2.png");
            imgEl.setAttribute("class", "userIcon");
            divEl.appendChild(imgEl);
      const labl1 = document.createElement('label');
            labl1.textContent = 'Lock';
            divEl.appendChild(labl1);
      const inpt1 = document.createElement('input');
            inpt1.setAttribute('type','radio');  
            inpt1.setAttribute('name',rbName);
            inpt1.setAttribute('value','lock');
            inpt1.checked = true;
            divEl.appendChild(inpt1);
      const labl2 = document.createElement('label');
            labl2.textContent = 'Unlock';
            divEl.appendChild(labl2);
      const inpt2 = document.createElement('input');
            inpt2.setAttribute('type','radio');  
            inpt2.setAttribute('name',rbName);
            inpt2.setAttribute('value','unlock');
            divEl.appendChild(inpt2);
      const br1 = document.createElement('br');
            divEl.appendChild(br1);
      const hr1 = document.createElement('hr');
            divEl.appendChild(hr1);      
      
            const labl3 = document.createElement('label');
            labl3.textContent = 'Username';
            divEl.appendChild(labl3);
      const inpt3 = document.createElement('input');
            inpt3.setAttribute('type','text');
            inpt3.setAttribute('name',usName);
            inpt3.setAttribute('value',userName);
            inpt3.disabled = true;
            inpt3.readOnly = true;
            divEl.appendChild(inpt3);
      
      const divHd = document.createElement('div');
            divHd.setAttribute('class','hiddenInfo');
      const hr2 = document.createElement('hr');
            divHd.appendChild(hr2);      

      const labl4 = document.createElement('label');
            labl4.textContent = 'Email:';
            divHd.appendChild(labl4);      
      const inpt4 = document.createElement('input');
            inpt4.setAttribute('type','email');
            inpt4.setAttribute('name',uEmail);
            inpt4.setAttribute('value',userEmail);
            inpt4.disabled = true;
            inpt4.readOnly = true;
            divHd.appendChild(inpt4);
      const labl5 = document.createElement('label');
            labl5.textContent = 'Age:';
            divHd.appendChild(labl5);            
      const inpt5 = document.createElement('input');
            inpt5.setAttribute('type','email');
            inpt5.setAttribute('name',usrAge);
            inpt5.setAttribute('value',userAge);
            inpt5.disabled = true;
            inpt5.readOnly = true;
            divHd.appendChild(inpt5);
            divEl.appendChild(divHd);
      const showBtn = document.createElement('button');
            showBtn.textContent = 'Show more'
            divEl.appendChild(showBtn);
    //console.log(divEl);
}

//------------------------------------------------------------------------
async function getProfile() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    const res = await fetch(url);
    const data = await res.json();    
    return Object.values(data)
}