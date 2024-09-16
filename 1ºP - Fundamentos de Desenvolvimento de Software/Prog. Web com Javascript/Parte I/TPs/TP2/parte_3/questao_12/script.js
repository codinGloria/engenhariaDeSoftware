let ladoA = Number(prompt("Insira o primeiro lado:"));
let ladoB = Number(prompt("Insira o segundo lado:"));
let ladoC = Number(prompt("Insira o terceiro lado:"));

if (ladoA == ladoB && ladoB == ladoC) {
    alert("Triângulo Equilátero");
} else if (ladoA != ladoB && ladoB != ladoC) {
    alert("Triângulo Escaleno");
} else {
    alert("Triângulo Isósceles");
}