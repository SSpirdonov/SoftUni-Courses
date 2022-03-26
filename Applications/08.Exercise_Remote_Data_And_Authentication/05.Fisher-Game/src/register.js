console.log('TODO:// Implement Register functionality');
window.addEventListener('DOMContentLoaded', () => {
    const registerForm =  document.querySelector('form'); 
    registerForm.addEventListener('submit', onRegister);
 });

async function onRegister(event) {
    const url = 'http://localhost:3030/users/register';
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const repass = formData.get('rePass').trim();
    
    try {
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
        console.log(res.status + ' : ' + res.statusText);
        if(res.ok !=true) {
            console.log(res.status + ' : ' + res.statusText);
            const error = await res.json();
            throw new Error(error.message);
        }

        const result = await res.json();
        const token = result.accessToken;
        sessionStorage.setItem('token', token);
        
        window.location = '/index.html';
    } catch (err) {
        alert(err.message)
    }

}