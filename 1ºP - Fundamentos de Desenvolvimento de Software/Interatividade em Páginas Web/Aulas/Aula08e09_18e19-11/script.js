let menuH = document.getElementById("menuHamburguer");
let menuC = document.getElementById("menuClose");
let nav = document.getElementById("navMenu");

menuH.addEventListener('click', function(){
    nav.classList.toggle("displayN");
    menuH.classList.toggle("displayN");
    menuC.classList.toggle("displayN");
})
menuC.addEventListener('click', function(){
    nav.classList.toggle("displayN");
    menuH.classList.toggle("displayN");
    menuC.classList.toggle("displayN");
})