var nav_link = document.getElementById("nav_link");
var menu = document.getElementById("menu");

function showMenu() {
    nav_link.style.right = "0";
    menu.style.display = "none";
}

function hideMenu() {
    nav_link.style.right = "-150px";
    menu.style.display = "block";
    menu.style.transition = "1";
}