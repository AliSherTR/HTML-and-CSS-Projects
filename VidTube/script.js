var menuIcon = document.querySelector(".menue-icon");
var sidebar = document.querySelector(".side-bar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    sidebar.classList.toggle("large-container");
}