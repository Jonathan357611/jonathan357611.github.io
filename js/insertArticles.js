const projects_container = document.getElementById("_place_articles");

function getArticles() {
    return new Promise((resolve, reject) => {
        fetch("articles/list.json")
        .then(response => {
            if (!response.ok) {
                reject(`Network response was not ok: ${response.status}`);
            }

            resolve(response.json());
            return response.json();
        })
        .catch(error => {
            reject(`Error occured: ${error}`);
        })
    })
}

function insertArticles(articles) {
    var n = 0;
    articles.projects.forEach(function(article) {
        var article_html;
        if (n % 2 == 0) {
            article_html = `<div class="project">
            <div class="project_side">
                <div class="project_description">
                    <h1 class="project_title">${article.name}</h1>
                    <p class="description_text">${article.description}</p>
                    <br>
                    <a href="/article.html?article=${article.filename}" class="button">Read more >></a>
                </div>
            </div>
            <div class="project_side project_img">
                <img class="responsive_image" img-name="${article.image}" >
            </div>
        </div>`
        } else {
            article_html = `<div class="project">
            <div class="project_side project_img">
                <img class="responsive_image" img-name="${article.image}" >
            </div>
            <div class="project_side">
                <div class="project_description">
                    <h1 class="project_title">${article.name}</h1>
                    <p class="description_text">${article.description}</p>
                    <br>
                    <a href="/article.html?article=${article.filename}" class="button">Read more >></a>
                </div>
            </div>
        </div>`
        }

        projects_container.innerHTML += article_html;
        n++;
    })

    // Run function from responsiveImages.js, to load dynamic images
    changeImages();
}

getArticles()
.then(articles => {
    insertArticles(articles);
})