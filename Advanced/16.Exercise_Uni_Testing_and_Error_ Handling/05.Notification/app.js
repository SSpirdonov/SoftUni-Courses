function notify(message) {
  
  const revail = document.querySelector('#notification');
  
  revail.textContent = message;
  revail.style.display = 'block' ;
  revail.addEventListener('click', () => revail.style.display = 'none') ;
}