import { e } from "./dom.js";

const main = document.querySelector('main');
const topics = document.querySelector('.topic-title');

const form = document.querySelector('main form');
export async function createPost() {
    const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';

    const formData = new FormData(form);
    const topicName = formData.get('topicName').trim();
    const userName = formData.get('username').trim();
    const postText = formData.get('postText').trim();
    const datePosted = (new Date()).toString();
    //console.log('Tuk sym' + datePosted);
    if ( topicName == '' || userName == '' || postText == '' ) {
        alert('All fields must be filled in');
        return;
    }

    const res = await fetch(url, {
        method: 'post',
        headers: {'Content-Type': 'Application/json'},
        body: JSON.stringify({ topicName: topicName, userName: userName, postText: postText, datePosted: datePosted })
    });
    const data = await res.json();
    //console.log(data._id);
    
    const topic =  
                  e('div',{className:'topic-container',id: data._id}, 
                  e('div',{className:'topic-name-wrapper'},
                  e('div',{className:'topic-name'},
                  e('a'  ,{className:'normal', href: '#'},
                  e('h2' ,{},`${topicName}`),
                  e('div',{className:'columns'},
                  e('div',{},
                  e('p'  ,{}, 'Date: ',
                  e('time',{},datePosted)),
                  e('div' ,{className:'nick-name'},
                  e('p'   ,{},'Username: ',
                  e('span',{},`${userName}`)))))))));
    topics.appendChild(topic);
    form.reset();
}