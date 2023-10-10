const upper = document.getElementById("contacts_top");
const bottom = document.getElementById("contacts_bottom");
const contact_text_content = document.getElementById("contact_text_content");
const contact_title_content = document.getElementById("contact_title_content");

function changePositions() {
    if (window.innerWidth / window.innerHeight < 1) {
        bottom.innerHTML = contact_text_content.innerHTML;
        upper.innerHTML = contact_title_content.innerHTML;
    } else {
        bottom.innerHTML = contact_text_content.innerHTML;
        upper.innerHTML = contact_title_content.innerHTML;
    }
}

changePositions();
window.addEventListener("resize", changePositions);