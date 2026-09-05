const toggleMenuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

toggleMenuBtn.addEventListener("click", function(){
    menu.classList.toggle("open");
});