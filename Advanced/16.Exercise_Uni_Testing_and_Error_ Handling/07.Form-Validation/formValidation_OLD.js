function validate() {
    const userNameRegex = /(^[A-Za-z0-9]{3,20}$)/;
    const passwordRegex = /(^[\w]{5,15}$)/;
    const emailRegex = /(^[\w]+@[\w]+\.[\w]+$)/;
    let isValidInput = true ;
    let isChecked = false ;
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', (e) => {

        e.preventDefault();

        const userNameField = document.getElementById('username');
        if(!userNameRegex.test(userNameField.value)) {
            isValidInput = false ;
            userNameField.style.borderBlockColor = 'red';
        } else {
            userNameField.style.border = 'none';
        }

        const passwordField = document.getElementById('password');
        const confPasswordField = document.getElementById('confirm-password');
        let passwordRed = false ;
        if(!passwordRegex.test(passwordField.value)) {
            isValidInput = false ;
            passwordRed = true ;
            passwordField.style.borderBlockColor = 'red' ;
            confPasswordField.style.borderColor = 'red' ;
        } else {
            passwordField.style.border = 'none' ;
            confPasswordField.style.border = 'none' ;
        }

        if(passwordField.value !== confPasswordField.value) {
            isValidInput = false ;
            passwordField.style.borderBlockColor = 'red' ;
        } else {
            if(!passwordRed) {
                passwordField.style.border = 'none' ;
            }
        }

        const emailField = document.getElementById('email') ;
        if(!emailRegex.test(emailField.value)) {
            isValidInput = false ;
            emailField.style.borderBlockColor = 'red' ;
        } else {
            emailField.style.border = 'none' ;
        }

        const validDiv = document.getElementById('valid');
        if (isValidInput) {
            validDiv.style.display = 'block';
        } else {
            validDiv.style.display = 'none';

        }
        
        if ( isChecked ){
            const cNumber = document.getElementById('companyNumber');
            if ( Number(cNumber.value) < 1000 || Number(cNumber.value) > 9999 ) {
                cNumber.style.borderColor = 'red' ;
            } else {
                cNumber.style.border = 'none' ;
            }
        }
    });

    document.getElementById('company').addEventListener('change', (e) => {
        const companyField = document.getElementById('companyInfo');    
            if ( e.target.checked ) {
                companyField.style.display = 'block' ;
                isChecked = true ;
                
            } else {
                isChecked = false ;
                companyField.style.display = 'none' ;
            }
    });
}

















