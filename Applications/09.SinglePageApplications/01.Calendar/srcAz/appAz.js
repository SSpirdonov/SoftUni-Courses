const yearsView = document.getElementById('years')
document.body.innerHTML = '';
document.body.appendChild(yearsView)
yearsView.addEventListener('click',onClick);

function onClick(event) {
    event.preventDefault();
    console.log(event.path);
}
