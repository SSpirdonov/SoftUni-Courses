
export function innHTML_CommentPage() {
    
    const innHTML_CommPage = 
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
        return innHTML_CommPage;
}
//---------------------------------------------------------------------------------------------------
