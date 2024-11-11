/* ********** EXEMPLO 01 - FOR com um vetor **********
const notas = [
    10, 10, 10, 10
];

let somatorio = 0;

for (const nota of notas){
    somatorio += nota;
};

console.log(somatorio);
*/


/* ********** EXEMPLO 02 - FOR fazendo Média Aritmética **********
const notasTurmaA = [
    10, 9, 6, 3, 7, 6, 7.5, 8.9, 9.9
];

let somaDasNotas = 0;
const quantAlunos = notasTurmaA.length;

for (const nota of notasTurmaA){
     somaDasNotas += nota;
};

const mediaDasNotas = somaDasNotas / quantAlunos;

console.log(mediaDasNotas.toFixed(2));
*/

/* ********** EXEMPLO 03 - FOR ANINHADOS ********** */
const escola = [
    [10, 9, 6, 3, 7, 6, 7.5, 8.9, 9.9, 2, 8, 10], // Turma A
    [7, 6, 5, 2.5, 7, 4], // Turma B
    [2, 1, 3, 2, 1, 0, 0, 1], // Turma C
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7] // Turma NPC
];

console.log(escola[2][2]); // acessa a 3ª turma e seu 3º elemento
console.log(escola[1].length); // informa o tamanho da turma 2 da escola

// Qual é a média da escola?
let somaNotasEscola = 0;
let quantAlunosEscola = 0;

for(const turma of escola){
    for (const nota of turma){
        somaNotasEscola += nota;
    }
}

for (const turma of escola){
    const quantAlunosTurma = turma.length;
    quantAlunosEscola += quantAlunosTurma;
}

const mediaEscola = somaNotasEscola / quantAlunosEscola;

console.log(mediaEscola.toFixed(2));

// Qual é a média de cada uma das turmas?
let mediasPorTurma = [];

for (const turma of escola){
    const quantAlunosTurma = turma.length;
    let somatorioNotasTurma = 0;
    for (const nota of turma){
        somatorioNotasTurma += nota;
    }

    const mediaTurma = somatorioNotasTurma / quantAlunosTurma;
    mediasPorTurma.push(mediaTurma);
}

console.log("Médias por turma: " + mediasPorTurma);

// Turma com maior media da escola? E a menor?
// Usando funções prontas
// const maiorMediaEscola = Math.max(...mediasPorTurma);
// const menorMediaEscola = Math.min(...mediasPorTurma);

let maiorMediaEscola, menorMediaEscola;

for (const mediaTurma of mediasPorTurma){
    if(maiorMediaEscola === undefined){
        maiorMediaEscola = mediaTurma;
        continue;
    }

    if(mediaTurma > maiorMediaEscola){
        maiorMediaEscola = mediaTurma;
    }
}

for (const mediaTurma of mediasPorTurma){
    if(menorMediaEscola === undefined){
        menorMediaEscola = mediaTurma;
        continue;
    }

    if(mediaTurma < menorMediaEscola){
        menorMediaEscola = mediaTurma;
    }
}

console.log("Maior média da escola (turma)", maiorMediaEscola.toFixed(2));
console.log("Menor média da escola (turma)", menorMediaEscola.toFixed(2));

// Menor nota de cada uma das turmas? E maior?
let menorNotaPorTurma = [];
let maiorNotaPorTurma = [];

for (const turma of escola){
    const menorNotaTurma = Math.min(...turma);
    const maiorNotaTurma = Math.max(...turma);

    menorNotaPorTurma.push(menorNotaTurma);
    maiorNotaPorTurma.push(maiorNotaTurma);
};

console.log("Maior nota por turma", menorNotaPorTurma);
console.log("Maior nota por turma", maiorNotaPorTurma);
