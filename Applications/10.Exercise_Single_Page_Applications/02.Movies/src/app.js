import { showHome } from './home.js';
import { showLogin } from './login.js';
import { showRegister } from './register.js';

const views = {
    'homeLink': showHome,
    'loginLink': showLogin,
    'registerLink': showRegister,

}
const nav = document.querySelector('nav');

document.getElementById('logoutBtn').addEventListener('click', onLogout);
nav.addEventListener('click', (event) => {
    const view = views[event.target.id];
    if(typeof view == 'function') {
        event.preventDefault();
        view();
    }   
});


// Start application in home View (catalog)
updateNav();
showHome();

export function updateNav() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    
    if(userData != null) {  // Значи имаме потребител
        nav.querySelector('#welcomeMsg').textContent = `Wecome ${userData.email}`;
        [...nav.querySelectorAll('.user')].forEach( e => e.style.display = 'block' );
        [...nav.querySelectorAll('.guest')].forEach( e => e.style.display = 'none' );
    } else {                // Значи нямаме потребител
        [...nav.querySelectorAll('.user')].forEach( e => e.style.display = 'none' );
        [...nav.querySelectorAll('.guest')].forEach( e => e.style.display = 'block' );
    }
}

async function onLogout(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    const {token} = JSON.parse(sessionStorage.getItem('userData'));

    await fetch('http://localhost:3030/users/logout', {
        headers: { 'X-Authorization': token }
    });
    sessionStorage.removeItem('userData');
    updateNav();
    showLogin();

}

//------------------------------------------------------------------------------------------------------------------
// window.showHome = showHome;       // Това закача функциите за глобалния скоуп, за да могат да се достъпват отвсякъде
// window.showDetails = showDetails; // защото когато се работи с модули те са невидими там 
// window.showCreate =  showCreate;  // Това го правим за да можем да ги достъпваме от конзолата
//------------------------------------------------------------------------------------------------------------------

















