function main() {
    // Get project data
    let paramString = window.location.href.split('?')[1];
    let queryString = new URLSearchParams(paramString);
    var valuelist = [];
    for (let pair of queryString.entries()) {
        console.log("Key is: " + pair[0]);
        console.log("Value is: " + pair[1]);
        valuelist += pair[1]
    }
    $
    $.get("articles/" + valuelist + "/data.json", function(data) {
        console.log(data)
        var image = "/images/" + data["image"]
        var description = data["description"]
        var title = data["title"]
        var filename = data["filename"]

        $("#pagetitle").text(title)
        
        $.ajax({  
            url: "articles/" + valuelist + "/article.md",  
            dataType: "text",  
            success: function(markdown) {
                console.log(data)
                var converter = new showdown.Converter();
                var html = converter.makeHtml(markdown);
                $("#markdown").html(html)

            }  
        }); 
    });

    
}