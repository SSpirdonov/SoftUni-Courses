function solve(){
   const inpCreator = document.getElementById('creator');
   const inpTitle = document.getElementById('title');
   const inpCategory = document.getElementById('category');
   const txtContent = document.getElementById('content');
   const btnCreate = document.getElementsByClassName('btn create')[0];

   const postSection = document.querySelector('main section');
   const archiveSection = document.getElementsByClassName('archive-section')[0].querySelector('ol');
   
   btnCreate.addEventListener('click', onBtnCreateClick);

   function onBtnCreateClick (e) {
      e.preventDefault();
      const article = document.createElement('article');
      
      article.innerHTML = `<h1>${inpTitle.value}</h1>
                           <p>Category:<strong>${inpCategory.value}</strong></p>
                           <p>Creator:<strong>${inpCreator.value}</strong></p>
                           <p>${txtContent.value}</p>
                           <div class = "buttons">
                           <button class = "btn delete">Delete</button>
                           <button class = "btn archive">Archive</button>
                           </div>`      
      postSection.appendChild(article);
      delBtn = article.getElementsByClassName('btn delete')[0];
      arhBtn = article.getElementsByClassName('btn archive')[0];
      delBtn.addEventListener('click', onDelBtnClick);
      arhBtn.addEventListener('click', onArhBtnClick);

      inpTitle.value = '';
      inpCategory.value = '';
      inpCreator.value = '';
      txtContent.value = '';

   }
   
   

   function onDelBtnClick(e) {      
      e.target.parentElement.parentElement.remove();
   }

   function onArhBtnClick(e) {
      li = document.createElement('li');
      let title = e.target.parentElement.parentElement.querySelector('h1').textContent;
      li.textContent = title;
      archiveSection.appendChild(li);
      let tempArr = Array.from(archiveSection.querySelectorAll('li'));
      sortedArr = [];
      tempArr.forEach(el => {
         sortedArr.push(el.textContent)
      });
      sortedArr.sort();
      archiveSection.innerHTML = '';

      sortedArr.forEach(el => {
         let li = document.createElement('li');
         li.textContent = el;
         archiveSection.appendChild(li);
      });


      e.target.parentElement.parentElement.remove();

   }


}
