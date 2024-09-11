/* Operadores de Comparação 
>, <, >=, <=, ==, !=, ===, !==
*/

const idade = 22;
const ehMaiorDeIdade = idade >= 18;
alert(ehMaiorDeIdade);

/* exemplo 2 */

const senha = prompt('Digite sua senha:');
const confirmarSenha = prompt('Digite novamente sua senha:');

const senhasIguais = senha === confirmarSenha;
alert(senhasIguais);

/* exemplo 3 */

const nome = prompt("Digite seu nome:");
const tamanhoValido = nome.length >= 2;
alert(tamanhoValido);

/* exemplo 4 */
const strA = prompt('Digite qualquer coisa:');
const strB = prompt('Outra coisa agora: ');

const strMesmoTamanho = strA.length === strB.length;
alert(strMesmoTamanho);