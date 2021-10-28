function lockedProfile() {

    document.getElementById('main').addEventListener('click', onClick);

    //----------------------FUNCTIONS------------------------------
    function onClick(ev) {
        if( ev.target.tagName == 'BUTTON' ) {
            
            if (!ev.target.parentElement.querySelectorAll('input')[0].checked) {
                if(ev.target.textContent == 'Show more') {

                    ev.target.parentElement.querySelector('div').style.display = 'block';
                    ev.target.textContent = 'Hide it' ;
                } else {
                    ev.target.parentElement.querySelector('div').style.display = 'none';
                    ev.target.textContent = 'Show more' ;
                }                
            }
        }             
    }    
}