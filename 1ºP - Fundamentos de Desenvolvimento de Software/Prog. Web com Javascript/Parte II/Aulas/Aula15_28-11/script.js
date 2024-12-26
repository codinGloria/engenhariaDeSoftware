// // RangeError

// function divide(a,b){
//     if (a === 0 || b === 0){
//         throw new RangeError("Divisão por zero!");
//     }
//     return a / b;
// }

// const resultado = divide (10,0);
// console.log(resultado);

const firstName = prompt("Digite o seu nome:");
const lastName = prompt("Digite o seu sobrenome:");

// Criando erro personalizado
class EmptyError extends Error {}
class InvalidLengthError extends Error {}

function createFullName(firstNameArg, lastNameArg){
    if(firstNameArg.length === 0){
        throw new EmptyError("O primeiro nome é obrigatório!");
    } else if (lastNameArg.length === 0){
        throw new EmptyError("O sobrenome é obrigatório!");
    } else if (firstNameArg.length < 2 || firstNameArg.length > 10){
        throw new InvalidLengthError("O primeiro nome deve ter entre 2 e 10 caracteres!");
    } else if (lastNameArg.length < 2 || lastNameArg.length > 10){
        throw new InvalidLengthError("O sobrenome deve ter entre 2 e 10 caracteres!");
    }

    const fullName = `${firstNameArg} ${lastNameArg}`;
    return fullName;
}

const fullName = createFullName(firstName, lastName);
alert("O nome completo é " + fullName);

