const numBigInt = 90636734574574587685745885n;
console.log(typeof numBigInt);

const nome = "Glória";
const sobrenome = "Braz";

const nomeCompleto = nome + " " + sobrenome;
const nomeCompletoConcat = nome.concat(" ", sobrenome);
const nomeCompletoString = `${nome} ${sobrenome}`;

console.log(nomeCompleto + "\n" + nomeCompletoConcat + "\n" + nomeCompletoString);

const r = Math.round(Math.random() * 255);
const g = Math.round(Math.random() * 255);
const b = Math.round(Math.random() * 255);

const cor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
const corConcat = "rgb(".concat(r, ", ", g, ", ", b, ")");
const corString = `rgb(${r}, ${g}, ${b})`;

document.body.style.backgroundColor = corString;