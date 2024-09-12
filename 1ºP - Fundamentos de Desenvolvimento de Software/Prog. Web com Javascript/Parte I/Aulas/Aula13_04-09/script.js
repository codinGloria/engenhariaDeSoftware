// Operadores Lógicos

/*
and &&
    or ||
        not !
*/

/*      --> AND (&&) <--
    true && true = true
    true && false = false
    false && true = false
    false && false = false
*/

const idade =+ prompt('Digite a sua idade');

if (idade > 0 && idade < 12) {
    alert("É criança")
} else if (idade >= 12 && idade <= 18) {
    alert('É adolescente!');
} else if (idade > 18 && idade < 60) {
    alert('É adulto');
} else if (idade >= 60 && idade <= 130) {
    alert('É idoso');
} else {
    alert('Idade inválida');
}

/*      --> OR (||) <--
    true || true = true
    true || false = true
    false || true = true
    false || false = false
*/
const gostaDeGatos = prompt('Você gosta de gatos?') === 's';
const gostaDeCachorro = prompt('Você gosta de cachorros?') === 'n';

if (gostaDeCachorros || gostaDeGatos) {
    alert("Você é uma pessoa legal :]")
} else  {
    alert('Não confio em você :(');
}

/*      --> NOT (!) <--
    true || true = true
    true || false = true
    false || true = true
    false || false = false
*/

const idade2 =+ prompt('Digite a sua idade');
const ehMaiorDeIdade = idade >= 18;
const ehMenorDeIdade = !ehMaiorDeIdade;

if (ehMenorDeIdade){
    alert('Você não é maior de idade.');
} else {
    alert('Acesso concedido')
}

// Exemplo de !! para validação
const nome = prompt('Digite seu nome:');

if (!!nome) {
    alert(nome);
} else {
    alert("É necessário digitar seu nome");
}