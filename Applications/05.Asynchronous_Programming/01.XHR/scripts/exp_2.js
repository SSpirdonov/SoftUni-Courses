function loadRepos() {
   
    const xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://api.github.com/users/testnakov/repos";

    const div = document.getElementById('res');

xhr.open(method, url, true);
xhr.onreadystatechange = function () {
  // In local files, status is 0 upon success in Mozilla Firefox
  if(xhr.readyState === XMLHttpRequest.DONE) {
    let status = xhr.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      // The request has been completed successfully
      console.log(xhr.responseText);
      div.textContent = xhr.responseText ;
    } else {
      // Oh no! There has been an error with the request!
    }
  }
};
xhr.send();
 
 }