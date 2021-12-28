function solution() {
    class Post {
        constructor(title, content){
            this.title = title;
            this.content = content;
        }
        toString(){
            return  `Post: ${this.title}\nContent: ${this.content}` ;
        }
    }
    //-----------------------------------------
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes){
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }
        addComment(text){
            this.comments.push(text);
        }
        toString(){
            let str_1 = `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}`;
            let str_2 = '\nComments:';
            this.comments.forEach(el => {
                str_2 += `\n * ${el}`
            });
            if(this.comments.length > 0) {
                return str_1 + str_2;
            } else {
                return str_1;
            }            
        }

    }
    //-----------------------------------------
    class BlogPost extends Post {
        constructor(title, content,views){
            super(title, content);
            this.views = views;
        }
        view(){
            this.views++;
            return this;
            
        }
        toString(){            
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
        }
    }

    
    return { Post, SocialMediaPost, BlogPost }
}

const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

// scm.addComment("Good post");
// scm.addComment("Very good post");
// scm.addComment("Wow!");

console.log(scm.toString());

let bp = new classes.BlogPost('Btitle', 'Bcontent', 2);
bp.view();
bp.view();
console.log(bp.toString());
