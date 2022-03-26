import { loadComments } from "./comments.js";
import { createPost } from "./createPost.js";
import { showHomePage } from "./home.js";
const form = document.querySelector('main form');
const topics = document.querySelector('.topic-title');
const homeAncor = document.querySelector('nav ul li a');

const urlLoad = 'http://localhost:3030/jsonstore/collections/myboard/posts';
const homePage = document.querySelector('main');
const postBtn = document.querySelector('.public');
const cancelBtn = document.querySelector('.cancel');
postBtn.addEventListener('click', onPostBtn);
cancelBtn.addEventListener('click', onCancelBtn);
topics.addEventListener('click',onTopicClick);
homeAncor.addEventListener('click', onAncorClick)


function onPostBtn(event) {
    event.preventDefault();
    createPost();
}

function onCancelBtn(event) {
    event.preventDefault();
    form.reset();
}

function onTopicClick(event) {
    event.preventDefault();    
    let topicId = '';
    for(let i = 0; i < event.path.length; i++ ){
        if (event.path[i].id){
            topicId = event.path[i].id;
            break;            
        }
    }
    homePage.style.display = 'none';
    
    loadComments(homePage,topicId, urlLoad);    
}

//-----------------------------------------------------------------------------

function onAncorClick() {
    showHomePage(homePage, topics);
}

 