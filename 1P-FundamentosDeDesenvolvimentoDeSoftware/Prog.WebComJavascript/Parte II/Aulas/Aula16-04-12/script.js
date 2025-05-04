/* TRY... CATCH */

class ZeroDivisionError extends Error {}
class InvalidNumberError extends Error {}

function divide(numA, numB) {
    if (numA === O){
        throw new ZeroDivisionError("O número A não pode ser zero!");
    }

    if (numB === 0){
        throw new ZeroDivisionError("O número B não pode ser zero!");
    }

    return numA / numB;
}

function solicitaNumeros(){
    const numA = +prompt("Digite o primeiro número:");
    const numB = +prompt("Digite o segundo número:");

    if (isNaN(numA)){
        throw new InvalidNumberError("O número A é inválido!");
    }

    if (isNaN(numB)){
        throw new InvalidNumberError("O número B é inválido!");
    }

    return {numA, numB};
}

function executaDivisao(){
    try {
        const {numA, numB} = solicitaNumeros();
        const resultado = divide(numA, numB);
    
        alert(`O resultado é: ${resultado}`);
    } catch (error) {
        if (error instanceof ZeroDivisionError) {
            alert("Você não pode dividir por zero!");
        } else {
            throw error;
        }
    }
}

try {
    executaDivisao();
} catch(error){
    if (error instanceof InvalidNumberError) {
        alert("Valor inválido!");
    } else {
        throw error;
    }
}

console.log("Fim do programa");