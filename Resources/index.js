var menuicon = document.querySelector(".menu-icon")
var sidebar = document.querySelector(".sidebar")
var mainbox = document.querySelector(".main")

menuicon.onclick = function(){
    sidebar.classList.toggle("hidden-sidebar")
    mainbox.classList.toggle("large-main-box")
}
