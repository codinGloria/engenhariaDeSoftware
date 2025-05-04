function comparaStringCaseInsensitive(strA, strB) {
    return strA.toLowerCase() === strB.toLowerCase();
}

// Testes
console.log(comparaStringCaseInsensitive("tEste", "Teste")); // true
console.log(comparaStringCaseInsensitive("olá", "OLÁ")); // true
console.log(comparaStringCaseInsensitive("abc", "def")); // false

const strA = prompt("Digite um texto qualquer");
const strB = prompt("Digite outro texto qualquer");
alert(comparaStringCaseInsensitive(strA, strB));