// recapitulando pós e pré incremento
let a = 1;
let b = a++;
let c = ++b;

console.log(a,b,c)

// passando sobre identação

// potenciaçao
let pot = 3 ** 4; // Math.pow(3,4);

// raizes
let raiz = Math.sqrt(9); // raiz quadrada
let raiz3 = Math.cbrt(81); // raiz cúbica

// resto da divisão
let resultado = 5 % 2;

// gerar números aleatórios
let num = Math.random(); // sem nenhuma especificação gera um número >= 0 e < 1
let num2 = Math.random() * 20; // vai ser >=0 e < 20

// arredondando números
let numero = Math.round(Math.random() * 101);
console.log(numero);