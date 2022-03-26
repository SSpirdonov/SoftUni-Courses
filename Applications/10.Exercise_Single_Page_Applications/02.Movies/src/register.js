// Initialization
// Find relevant section
// detach section from DOM

import { showView } from './dom.js';
import { showHome } from './home.js';
import { updateNav } from './app.js';
const section = document.getElementById('form-sign-up');

export function showRegister() {
    showView(section);
}

const form =  section.querySelector('form');
form.addEventListener('submit', onSubmit);

async function onSubmit(event) {    
    event.preventDefault();
    const formData = new FormData(form);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const repass = formData.get('repeatPassword').trim();
    
    if( email == '' ) {
        alert('The email input must be filled');
        return;        
    }
    if( password.length < 6) {
        alert('The password should be at least 6 characters long');
        return;        
    }
    if( password != repass ) {
        alert('Passwords don\'t match');
        return;
    }
    
    
    try {
        const res = await fetch('http://localhost:3030/users/register', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({email, password})
        });
        if (res.ok != true){
            const error = await res.json();
            throw new Error(error.message);
        }

        const data = await res.json();

        const userData = {
            email: data.email,
            id: data._id,
            token: data.accessToken
        }

        sessionStorage.setItem('userData',JSON.stringify(userData));
        form.reset();        
        updateNav();
        showHome();
    } catch (err) {
        alert(err.message);
    }

}

