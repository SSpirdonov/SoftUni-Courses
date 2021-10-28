function encodeAndDecodeMessages() {
    let textField1  = document.querySelectorAll('textarea')[0];
    let textField2  = document.querySelectorAll('textarea')[1];
    const button1 = document.querySelectorAll('button')[0];
    const button2 = document.querySelectorAll('button')[1];
    button1.addEventListener('click' , click1);
    button2.addEventListener('click' , click2);
    
    function click1() {
        textField2.value = textField1.value.split('').map( (a) => String.fromCharCode(a.charCodeAt(0) + 1 )).join('');
        textField1.value = '';
    }
    
    function click2() {
        textField2.value = textField2.value.split('').map( (a) => String.fromCharCode(a.charCodeAt(0) - 1 )).join('');
        
    }
}