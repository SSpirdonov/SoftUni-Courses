function getArticleGenerator(articles) {
    let currentRecord = 0 ;
    let limit = articles.length;
    let refToShow = document.querySelector('#content');
    function showNext() {
        if (currentRecord < limit ) {
            let art = document.createElement('article');
            art.textContent = articles[currentRecord] ;
            refToShow.appendChild(art);
            
            currentRecord++ ;
        }
    }
    return showNext;
}
