/* Operador de igualdade (==) / diferença (!=) simples 
-> só compara os valores, sem se preocupar com o tipo
 */

let a = 5;
let b = "5";

if (a == b) {
    console.log("Os valores são iguais, mesmo que os tipos sejam diferentes.");
} else {
    console.log("Os valores são diferentes.");
}

/*  Operador de igualdade (===) / diferença (!==) estrita 
-> compara tanto o valor quanto o tipo
*/

if (a === b) {
    console.log("Os valores e tipos são iguais.");
} else {
    console.log("Os valores são iguais, mas os tipos são diferentes.");
}
