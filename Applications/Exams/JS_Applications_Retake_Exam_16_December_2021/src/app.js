import { page,render } from '/src/lib.js';
import { getUserData } from '/src/util.js';
import { homePage } from '/src/views/home.js';
import { profilePage } from '/src/views/profile.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './api/data.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { searchPage } from './views/search.js';


const root = document.getElementById('content');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', homePage);
page('/profile', profilePage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/search', searchPage);

updateUserNav();
page.start();
//page.redirect('/');
//---------------------------------------------------------------
function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;
    
    next();
}
//---------------------------------------------------------------

function updateUserNav() {
    const userData = getUserData();
    if(userData) {
        Object.values(document.querySelectorAll('.user')).map(el => el.style.display = 'inline-block');
        Object.values(document.querySelectorAll('.guest')).map(el => el.style.display = 'none');
    } else {
        Object.values(document.querySelectorAll('.user')).map(el => el.style.display = 'none');
        Object.values(document.querySelectorAll('.guest')).map(el => el.style.display = 'inline-block');
    }
}

//---------------------------------------------------------------

async function onLogout() {
    await logout();
    updateUserNav();
    page.redirect('/');
}