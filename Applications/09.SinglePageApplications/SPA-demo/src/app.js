import { showCatalogPage } from "./catalog.js";
import { showAboutPage, showHomePage } from "./home.js";
import { showLoginPage } from "./login.js";
import { showRegisterPage } from "./register.js";

document.getElementById('logoutBtn').addEventListener('click', onLogout);
document.querySelector('nav').addEventListener('click', onNavigate);

const sections = {
    'homeBtn': showHomePage,
    'catalogBtn': showCatalogPage,
    'aboutBtn': showAboutPage,
    'loginBtn': showLoginPage,
    'registerBtn': showRegisterPage
}

updateUserNav();

// Start application in home view
showHomePage();
function onNavigate(event) {
    //console.log(' Inside on navigate');
    if(event.target.tagName == 'A') {
        const view = sections[event.target.id]; // Това замества switch-a        
        if(typeof view == 'function') {
            event.preventDefault();
            view();                             // Викаме това тук защото, може да има и обикновени линкове, които не се управляват от никакви eventListener - и
        }
        //sections[event.target.id](); // Това е същото, като горните два реда


        // switch(event.target.id) {
        //     case 'homeBtn':
        //         showHomePage();
        //         break;
        //     case 'catalogBtn':
        //         showCatalogPage();
        //         break;
        //     case 'aboutBtn':
        //         showAboutPage();
        //         break;
        // }
    }
}

export function updateUserNav() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if(userData != null){
        document.getElementById('userNav').style.display = 'inline-block';
        document.getElementById('guestNav').style.display = 'none';
    } else {
        document.getElementById('userNav').style.display = 'none';
        document.getElementById('guestNav').style.display = 'inline-block';
    }
}

async function onLogout(event) {
    event.stopImmediatePropagation(); // Това мaй предотвратява изпълнението на eventListenar-ите преди този.
    const token = JSON.parse(sessionStorage.getItem('userData'));   

    const res = await fetch('http://localhost:3030/users/logout', {
        'X-Authorization': token
    });

    sessionStorage.removeItem('userData');
    updateUserNav();
    showHomePage();
}