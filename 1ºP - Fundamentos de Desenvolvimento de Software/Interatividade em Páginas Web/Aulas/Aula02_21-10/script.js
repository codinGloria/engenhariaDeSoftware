const pessoa = {
    nome : "Glória",
    local : {
        cidade : "Itaúna",
        estado : "Minas Gerais"
    },
    saudar : function(){
        alert("Meu nome é " + this.nome + "!");
    }
};

console.log(pessoa.nome);
pessoa.idade = 22;
console.log(pessoa);
console.log(pessoa.local.cidade);
// console.log(pessoa.saudar());

let cargo = "Desenvolvedor Backend";
let salario = 12000;

const rh = {
    cargo,
    salario
 };
console.log(rh);
const rh2 = { };
rh2.cargo = "Desenvolvedor Backend";
rh2.salario = 12000;
console.log(rh2.cargo);
rh2.salario = 18000;
console.log(rh2);

// ******** Função Construtora ********

function Estudante(nome, disciplina){
    this.nome = nome;
    this.disciplina = disciplina;
};

let discente1 = new Estudante("Glória","Libras");
let discente2 = new Estudante("Luan","Interatividade em Páginas Web");
let discente3 = new Estudante("Lívia", "Programação Web com Javascript II");

console.log(discente1);
console.log(discente2);
console.log(discente3);

// Usando JS no HTML
console.dir(document);

let meuTexto = document.getElementById("texto");
meuTexto.textContent = "Esse é meu texto alterado";
console.log(meuTexto.textContent);
