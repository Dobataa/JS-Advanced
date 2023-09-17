function getArticleGenerator(articles) {
    let result = document.getElementById('content');

    return () => {
        if (articles.length === 0) {
            return;
        }
        let article = document.createElement('article');
        article.innerHTML = articles.shift();
        result.appendChild(article);
    }
}
