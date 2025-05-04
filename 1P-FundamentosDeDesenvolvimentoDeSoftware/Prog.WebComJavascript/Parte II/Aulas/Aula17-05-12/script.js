// Entendendo FINALLY...

/* Exemplo Try...Catch
class EmptyNameError extends Error {}

function solicitaNome(){
    const nome = prompt("Qual seu nome?");

    if (!nome){
        throw new EmptyNameError("O nome é obrigatório!");
    }

    return nome;
}

try {
    solicitaNome();
} catch(error){
    if (error instanceof EmptyNameError){
        alert(error.message);
    } else {
        throw error;
    }
}
*/

class NumeroNaoEhParError extends Error {}
class NumeroInvalidoError extends Error {}

function verificaEhPar(num){
    if (num % 2 === 0){
        return true;
    } else {
        return false;
    }
}

try {
    const numeroPar = Number(prompt("Digite um número par:"));

    if (isNaN(numeroPar)){
        throw new NumeroInvalidoError("O número digitado é inválido!");
    }

    if (verificaEhPar(numeroPar)){
        alert(`O número digitado é par! Número: ${numeroPar}`);
    } else {
        throw new NumeroNaoEhParError("O número digitado é impar!");
    }	
} catch (error){
    if (error instanceof NumeroNaoEhParError){
        alert(error.message);
    } else {
        throw error;
    }
} finally {
    alert("Fim do programa.");
}