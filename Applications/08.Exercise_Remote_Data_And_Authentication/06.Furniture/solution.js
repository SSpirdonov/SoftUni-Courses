const tBody = document.querySelector('tbody');
function solve() { 
  
  if (window.location.href.includes('login.html')) {
    const registerForm = document.getElementById('register');
    const loginForm = document.getElementById('login');
    registerForm.addEventListener('submit',onRegister);
    loginForm.addEventListener('submit',onLogin);
  }
  if (window.location.href.includes('homeLogged.html')) {
    const logoutBtn = document.getElementById('logoutBtn');
    const createForm = document.getElementById('create-product');
    const buyBtn = document.getElementById('buy');
    const allOrdersBtn = document.getElementById('allOrders');    
    logoutBtn.addEventListener('click', onLogout);
    createForm.addEventListener('submit', onCreate);
    buyBtn.addEventListener('click', onBuy);
    allOrdersBtn.addEventListener('click', onAllOrders);

    loadData();
  }
  if(window.location.href.includes('home.html')){
    loadData();
  }

   //---------------------------------------------------------------
  async function onRegister(event) {
    const url = 'http://localhost:3030/users/register';
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const repass = formData.get('rePass').trim();
    
    try {
        if(email == '' || password == '' || repass == '') {
          throw new Error('All fields required');
        }
        if(password !== repass) {
            throw new Error('The passwords do not match');
        }    
        const res = await fetch(url,{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({ email, password })
        });
        if(res.ok !=true) {
            const error = await res.json();
            throw new Error(error.message);
        }
        const result = await res.json();
        const token = result.accessToken;
        sessionStorage.setItem('token', token);        
    } catch (err) {
        alert(err.message)
    }
  }
  //---------------------------------------------------------------
  async function onLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
     const email = formData.get('email');
    const password = formData.get('password');
     try {
      const res = await fetch('http://localhost:3030/users/login', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
      });
      
      if ( res.ok != true ) {
        const error = await res.json();
        throw new Error(error.message);
      }
       const data = await res.json();
        const userData = {
        email: data.email,
        id: data._id, 
        token: data.accessToken,
        userName: email
      }
      sessionStorage.setItem('userData', JSON.stringify(userData));
      window.location = '/homeLogged.html';
    } catch (err) {
      alert(err.message)
    } 
  }
  //---------------------------------------------------------------
  async function onLogout(event) {
    const token = JSON.parse(sessionStorage.userData).token;

    const res = await fetch('http://localhost:3030/users/logout', {headers: {'X-Authorization': `${token}`}});
    if (res.status === 204) {
      sessionStorage.clear();
      window.location = '/home.html'
    }    
  }
  //---------------------------------------------------------------
  async function onCreate(event) {
    event.preventDefault();
    const token = JSON.parse(sessionStorage.userData).token;
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const price = formData.get('price');
    const factor = formData.get('factor');
    const img = formData.get('img');
    const data = {name,price,factor,img}    
    try {
      if(Object.values(data).some(x => x == '')) {
          throw new Error('All fields are required !');
      }
      const res = await fetch('http://localhost:3030/data/furniture',{
          method: 'post',
          headers: {'Content-Type': 'application/json', 'X-Authorization': token},
          body: JSON.stringify(data)
      });
      if(res.ok != true) {
        const error = await res.json();
        throw new Error(error.message);
      }
      event.target.reset(); 
    createRow(data);
  } catch (err) {
      alert(err.message);
  }
    
  }
  //---------------------------------------------------------------
  function createRow(data) {
    let disabl = '';
    if(window.location.href.includes('home.html')){
      disabl = 'true';
    }
    const tableRow = create('tr',{},
    create('td',{}, create('img',{src: data.img})),
    create('td',{}, create('p',{}, data.name)),
    create('td',{}, create('p',{}, data.price)),
    create('td',{}, create('p',{}, data.factor)),        
    create('td',{}, create('input',{type: 'checkbox', disabled: disabl} ))        
    );
    tBody.appendChild(tableRow);  
  }
  //---------------------------------------------------------------
  async function loadData() {    
    const res = await fetch('http://localhost:3030/data/furniture');
    const data = await res.json();    
    data.map(e => createRow(e));
  }

  //---------------------------------------------------------------
  function create(type, attr, ...content) {
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
  //---------------------------------------------------------------
  function onBuy(event) {
    //console.log('Buy button clicked');
    const fromScreen = document.querySelectorAll('tbody tr');
    const data = [];
    const frScr = Array.from(Object.values(fromScreen)).map(e => {
      const checkBox = e.querySelector('td input');
      //console.log(checkBox.checked);
      if(checkBox.checked){
        const img = e.querySelectorAll('td img')[0].src ;
        const name = e.querySelectorAll('td p')[0].textContent ;
        const price = e.querySelectorAll('td p')[1].textContent ;
        const decFactor = e.querySelectorAll('td p')[2].textContent ;
        const data1 = {};
        Object.assign(data1, {img, name, price, decFactor});
        data.push(data1);
        buyFurniture(data1);
      }
      
    });
    

  }
  //---------------------------------------------------------------
  async function buyFurniture(data) {
    const token = JSON.parse(sessionStorage.userData).token;
    try {      
      const res = await fetch('http://localhost:3030/data/orders',{
          method: 'post',
          headers: {'Content-Type': 'application/json', 'X-Authorization': token},
          body: JSON.stringify(data)
      });
      if(res.ok != true) {
          const error = await res.json();
          throw new Error(error.message);
      }
      const result = await res.json();      
      
    } catch (err) {
      alert(err.message);
    }    
  
  }
  //---------------------------------------------------------------
  async function onAllOrders(event) {
    //console.log('All Orders button clicked');
    const userId = JSON.parse(sessionStorage.userData).id;
    
    const res = await fetch(`http://localhost:3030/data/orders?where=_ownerId%3D"${userId}"`);
    
    const data = await res.json();
    const ordersBought = event.target.parentElement;
    const names = ordersBought.querySelectorAll('p span')[0];
    const price = ordersBought.querySelectorAll('p span')[1];
    
    const totalPrice = data.map(e => Number(e.price)).reduce((a, b) => a + b,0);
    price.textContent = totalPrice + ' $';
    //console.log(totalPrice);
  }

}

solve();
