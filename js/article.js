const article_title = document.getElementById("article_title");
const article_links = document.getElementById("article_links");
const article_content = document.getElementById("article_content");

function getArticles() {
    return new Promise((resolve, reject) => {
        fetch("articles/list.json")
        .then(response => {
            if (!response.ok) {
                reject(`Network response was not ok: ${response.status}`);
            }

            resolve(response.json());
        })
        .catch(error => {
            reject(`Error occured: ${error}`);
        })
    })
}

function loadArticle(filename) {
    getArticles()
    .then(function(articles) {
        return new Promise((resolve, reject) => {
            articles.projects.forEach(function(article) {
                if (article.filename == filename) {
                    resolve(article);
                }
            })
            reject(filename);
        })
        .then(article => {
            return new Promise((resolve, reject) => {
                fetch(`/articles/${article.filename}/article.html`)
                .then(response => {
                    if (!response.ok) {
                        reject(`Network response was not ok: ${response.status}`);
                    }

                    resolve(response.text());
                })
                .catch(error => {
                    reject(`Error occured: ${error}`);
                })
            })
            .then(article_html => {
                // Got article
                article_title.innerText = article.name;
                
                // Insert links
                article.links.forEach(function(link) {
                    article_links.innerHTML += `
                    <div class="link">
                        <a class="button" href="${link.link}">${link.name} >></a>
                    </div>
                    `
                })

                article_content.innerHTML = article_html;
                Prism.highlightAll();
                
                var images = article_content.querySelectorAll("img");
                images.forEach(function(image) {
                    var img_src = image.getAttribute("src");
                    image.src = `/articles/${article.filename}/${img_src}`;
                })
            })
        })
        .catch(error => {
            console.error(`article "${error}" could not be found!`);
            window.location.href = "/";
        })
    })
}

const url_params = new URLSearchParams(window.location.search);
const article = url_params.get("article");
if (article == null) {
    window.location.href = "/";
} else {
    loadArticle(article);
}