let menuH = document.getElementById("menuHamburguer");
let menuC = document.getElementById("menuClose");

menuH.addEventListener('click', function(){
    document.getElementById("navMenu").style.display = "block";
    menuC.style.display = "block";
    menuH.style.display = "none";
})
menuC.addEventListener('click', function(){
    document.getElementById("navMenu").style.display = "none";
    menuC.style.display = "none";
    menuH.style.display = "block";
})