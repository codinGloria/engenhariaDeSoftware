let h1 = document.querySelector("h1");
h1.addEventListener('click', () => {
    h1.textContent = "Fui clicado!";
})

let inputUser = document.getElementById("inputUser");
// EVENTO -> KEYDOWN
// inputUser.addEventListener('keydown', function (event){
//     if (event.key === "Enter") {
//         alert(this.value);
//         document.getElementById("texto").innerHTML = 
//             "O valor de entrada do campo input que foi digitado é: " + this.value;
//         this.value = "";
//     }
// });

// EVENTO -> CHANGE
// inputUser.addEventListener('change', function (){
//         document.getElementById("texto").innerHTML = 
//             "O valor de entrada do campo input que foi digitado é: " + this.value;
//         this.value = "";
// });

// EVENTO -> FOCUSOUT
inputUser.addEventListener('focusout', function (){
    if (this.value === "Glória"){
        document.getElementById("texto").innerHTML = 
        "Chegou a Admin e o nome dela é: " + this.value;
    } else {
        this.style.borderColor = "red";
        this.style.color = "red";
    }
});

// EVENTO -> LOAD
document.body.onload = function(){
    document.body.style.backgroundColor = "lightsteelblue";
};

let img = document.querySelector("img");
img.addEventListener('load', function(){
    alert(img.getAttribute("src"));
})

