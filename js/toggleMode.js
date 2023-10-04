const toggleSwitch = document.querySelector("#darkmode-switch");
const root = document.documentElement;
const themeName = document.querySelector("#theme_name");
const header = document.querySelector("#header");

// Function to write a cookie
function setCookie(key, value, daysToExpire) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToExpire);

    const cookie = `${key}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = cookie;
}

// Function to get the value of a cookie by its key
function getCookie(key) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieKey, cookieValue] = cookie.trim().split('=');
        if (cookieKey === key) {
            return cookieValue;
        }
    }
    return null;
}

function setDarkMode() {
    root.style.setProperty("--color-1", "#fff");
    root.style.setProperty("--color-2", "#000");
    themeName.innerText = "DARK";
    setCookie("theme", "dark", 999999);
}
function setLightMode() {
    root.style.setProperty("--color-1", "#000");
    root.style.setProperty("--color-2", "#fff");
    themeName.innerText = "LIGHT";
    setCookie("theme", "light", 999999);
}

toggleSwitch.addEventListener("change", function() {
    if (toggleSwitch.checked) {
        setDarkMode();
    } else {
        setLightMode();
    }
})

var themecookie = getCookie("theme");
if (themecookie != null) {
    if (themecookie == "dark") {
        toggleSwitch.checked = true;
        setDarkMode();
    } else {
        setLightMode();
        toggleSwitch.checked = false;
    }
}

let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        header.style.top = '0';
    } else {
        header.style.top = '-100px'; // Adjust this value to hide the header completely
    }

    prevScrollPos = currentScrollPos;
};