import { e } from "./dom.js";
const urlComments = 'http://localhost:3030/jsonstore/collections/myboard/comments';
export  async function loadComments(homePage,topicId, urlLoad) {
    const res = await fetch(urlLoad + '/' + topicId);
    const data = await res.json();
    
    const container = document.querySelector('.container');
    const innHTML_CommentPage = 
    `
       <!-- theme-title  -->
       <div class="theme-title">
           <div class="theme-name-wrapper">
               <div class="theme-name">
                   <h2>${data.topicName}</h2>
           </div>
       </div>
       </div>
       <!-- comment  -->
        <div class="comment">
             <div class="header">
             <img src="./static/profile.png" alt="avatar">
             <p><span>${data.userName}</span> posted on <time>${data.datePosted}</time></p>

             <p class="post-content">${data.postText}</p>
        </div>
        
        <div class="all-comments">
        //
            <div id="user-comment">
                <div class="topic-name-wrapper">
                    <div class="topic-name">
                        <p><strong>Daniel</strong> commented on <time>3/15/2021, 12:39:02 AM</time></p>
                        <div class="post-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere sint
                                dolorem quam.</p>
                        </div>
                    </div>
                </div>
            </div>
        //
        </div>
           <p><span>currentUser</span> comment:</p>
           <div class="answer">
               <form>
                   <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                   <div>
                       <label for="username">Username <span class="red">*</span></label>
                       <input type="text" name="username" id="username">
                   </div>
                   <button>Post</button>
               </form>
           </div>
       </div>
    `
    
    const commentView  = e('div',{className: 'theme-content',innerHTML: innHTML_CommentPage});
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