
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