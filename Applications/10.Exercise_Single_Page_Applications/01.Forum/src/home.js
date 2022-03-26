import { e } from "./dom.js";
const urlLoad = 'http://localhost:3030/jsonstore/collections/myboard/posts';

export async function showHomePage(homePage, topics) {    
    const themeTitle = document.querySelector('div .theme-title');
    const commentView = document.querySelector('div .comment');
    if(commentView){
        themeTitle.remove();
        commentView.remove();
    }
    console.log(commentView);
    homePage.style.display = ''; 
    const res = await fetch(urlLoad);
    const data = await res.json();
    //console.log(data);
    topics.replaceChildren();
    for (const el of Object.values(data)) {
        const topic =  
                  e('div',{className:'topic-container',id: el._id}, 
                  e('div',{className:'topic-name-wrapper'},
                  e('div',{className:'topic-name'},
                  e('a'  ,{className:'normal', href: '#'},
                  e('h2' ,{},`${el.topicName}`),
                  e('div',{className:'columns'},
                  e('div',{},
                  e('p'  ,{}, 'Date: ',
                  e('time',{},`${new Date()}`)),
                  e('div' ,{className:'nick-name'},
                  e('p'   ,{},'Username: ',
                  e('span',{},`${el.userName}`)))))))));
    topics.appendChild(topic);
    }
}
