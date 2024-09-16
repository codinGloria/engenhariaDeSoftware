let fruta = prompt("Qual fruta você quer hoje?");

fruta = fruta.toLowerCase();

if (fruta == "laranja") {
    alert("Não esqueça de descascar!");
} else if ( fruta == "maça") {
    alert("Se você tirar a casca perderá as vitaminas!");
} else if ( fruta == "banana") {
    alert("Já vem naturalmente embalada e pronta para o consumo!");
} else {
    alert("Não tenho nada a dizer sobre isso.");
}