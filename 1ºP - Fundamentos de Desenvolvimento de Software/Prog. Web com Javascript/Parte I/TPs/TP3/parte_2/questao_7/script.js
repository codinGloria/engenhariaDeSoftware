let camiseta = prompt("Qual a cor da camiseta?");
let calca = prompt("E a cor da calça?");

camiseta = camiseta.toLowerCase();
calca = calca.toLowerCase();

if (camiseta === "vermelha" && calca === "amarela") {
    alert("Ketchup e mostarda!");
} else if (camiseta === "amarela" && calca === "preta") {
    alert("Agora você é uma abelha!");
} else if (camiseta === "branca" && calca === "jeans") {
    alert("Look clássico! Não tem como errar");
} else {
    alert("Hmm, nada a comentar...!");
}