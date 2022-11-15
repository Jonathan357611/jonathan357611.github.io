function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function age() {
    var age = 14;
    var timeout = 0;
    var initial_timeout = 100;
    var final_timeout = 300;

    var timeout_to_add = (final_timeout - initial_timeout) / age;
    console.log(timeout_to_add);
    for (i = 0; i <= age; i++) {
        
        $("#age").text(i);
        await sleep(timeout);
        timeout += timeout_to_add;
    }  
}

async function loadProjects() {
    $.get("articles/articles.json", function(data) {
        var articles = data["articles"];
        console.log(articles);
        for (let i = 0; i < articles.length; i++) {
            $.get("articles/" + articles[i] + "/data.json", function(data) {
                console.log(data)
                var image = "/images/" + data["image"]
                var description = data["description"]
                var title = data["title"]
                var filename = data["filename"]

                $("#projects").append("<div onclick='window.location = \"/project.html?p=" + filename + "\";' style='--image: url(" + image + ");background-repeat: no-repeat;' class='project'><h2>" + title + "</h2><p>" + description + "</p></div>")
            });
        }
    });
}

function redirect(project) {
    alert(project)
}

function main() {
    age();
    loadProjects();

    $("#support_button").on( "click", function() {
        $("#support_popup").show();
        $("#overlay").show();
        $("#main").css("background-color", "black")
    });
    $("#close_support").on( "click", function() {
        $("#support_popup").hide();
        $("#overlay").hide();
        $("#main").css("background-color", "black")
    });

    console.log("asd");
}