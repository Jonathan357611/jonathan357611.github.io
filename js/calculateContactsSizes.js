const upper = document.getElementById("contacts_top");
const bottom = document.getElementById("contacts_bottom");
const contact_text_content = document.getElementById("contact_text_content").innerHTML;
const contact_title_content = document.getElementById("contact_title_content").innerHTML;

document.getElementById("contact_text_content").innerHTML = "";
document.getElementById("contact_title_content").innerHTML = "";

function changePositions() {
    if (window.innerWidth / window.innerHeight < 1) {
        bottom.innerHTML = contact_text_content;
        upper.innerHTML = contact_title_content;
    } else {
        upper.innerHTML = contact_text_content;
        bottom.innerHTML = contact_title_content;
    }
}

changePositions();
window.addEventListener("resize", changePositions);