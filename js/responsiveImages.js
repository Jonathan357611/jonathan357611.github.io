function changeImages() {
    var image_type;
    if (window.innerWidth / window.innerHeight < 1) {
        image_type = "mobile";
    } else {
        image_type = "desktop";
    }
    
    var images = document.querySelectorAll(".responsive_image");
    images.forEach(function(image) {
        var image_name = image.getAttribute("img-name");
        var new_path = "images/" + image_name + "-" + image_type + ".jpg";
        image.src = new_path;
    })
}

changeImages();
window.addEventListener("resize", changeImages);