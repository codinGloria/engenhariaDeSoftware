function ehPalindromo(palavra) {
  return palavra === palavra.split("").reverse().join("");
}

console.log(ehPalindromo("ovo")); // true
console.log(ehPalindromo("asa")); // true
console.log(ehPalindromo("batata")); // false
