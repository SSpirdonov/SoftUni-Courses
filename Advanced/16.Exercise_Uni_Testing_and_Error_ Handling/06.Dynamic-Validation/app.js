function validate() {
    const field = document.querySelector('#email');
    
    field.addEventListener('change', onChange);
    
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
    function onChange(e) {
        if(pattern.test(field.value)) {
            field.classList.remove('error') ;                     
        } else {
            field.classList.add('error') ;
        }
    }    
}

// function validate() {
//     document.getElementById('email').addEventListener('change', ({target}) =>{
//         const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

//         if (pattern.test(target.value)) {
//             target.classList.remove('error');
//         } else{
//             target.classList.add('error');
//         }
//     })
// }