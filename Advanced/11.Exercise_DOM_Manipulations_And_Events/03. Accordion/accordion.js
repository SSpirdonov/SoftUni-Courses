function toggle() {
    let bt = document.getElementsByClassName("button")[0].textContent ;
    if (document.getElementById("extra").style.display === 'none') {
        document.getElementsByClassName("button")[0].textContent = 'Less' ;
        document.getElementById("extra").style.display = 'block';    
    } else {
        document.getElementsByClassName("button")[0].textContent = 'More' ;
        document.getElementById("extra").style.display = 'none';
    }
}   