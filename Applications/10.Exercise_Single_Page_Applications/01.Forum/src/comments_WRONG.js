import { e } from "./dom.js";
import { innHTML_CommentPage } from "./htmls.js";
const urlComments = 'http://localhost:3030/jsonstore/collections/myboard/comments';
export  async function loadComments(homePage,topicId, urlLoad) {
    const res = await fetch(urlLoad + '/' + topicId);
    const data = await res.json();
    
    const container = document.querySelector('.container');
    
    const innHTML_CommPage = innHTML_CommentPage();
    console.log(innHTML_CommPage);
    const commentView  = e('div',{className: 'theme-content',innerHTML: innHTML_CommPage});
    container.appendChild(commentView); 
    const commentForm = document.querySelector('.answer form');
    const commentButton = commentForm.querySelector('button');
    const allComments = document.querySelector('.all-comments');
    allComments.replaceChildren();    
    commentButton.addEventListener('click', onCommentButton);
    

    async function onCommentButton(event) {
        event.preventDefault();        
        const formData = new FormData(commentForm);
        const username = formData.get('username').trim();
        const postText = formData.get('postText').trim();
        const datePosted = (new Date()).toString();
        const res = await fetch(urlComments,{
           method: 'post',
           headers: {'Content-Type': 'Application/json'},
            body: JSON.stringify({ userName: username, postText: postText, datePosted: datePosted, topicId: topicId }) 
        });
        const data = await res.json();
        console.log(data);
        
        const result = await fetch(urlComments);
        const dataComments = await result.json();
        const topicComments =  Object.values(dataComments).filter((el) => el.topicId == topicId);
        console.log(Object.values(topicComments));
        allComments.replaceChildren();
        Object.values(topicComments).forEach(row => {
            const currComment =
            `
                <div class="topic-name-wrapper">
                    <div class="topic-name">
                        <p><strong>${row.userName}</strong> commented on <time>${row.datePosted}</time></p>
                        <div class="post-content">
                            <p>${row.postText}</p>
                        </div>
                    </div>
                </div>
            `
            const addComment = e('div',{ id: 'user-comment', innerHTML: currComment });
            allComments.appendChild(addComment);            
        });        
    }
    
}

export function createComment(topicId) {
    
}