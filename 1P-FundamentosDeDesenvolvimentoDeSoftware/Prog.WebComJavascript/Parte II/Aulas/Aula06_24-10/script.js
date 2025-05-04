/* ********** DO...WHILE ********** 
let listaDeCompras = [];
let nomeProduto = "";

do {
    nomeProduto = prompt(
        "Digite o nome do produto: \n (Não digite nada para finalizar)"
    );
    if(nomeProduto !== "") {
        listaDeCompras.push(nomeProduto);
    }
} while (nomeProduto !== "");
 */

/* ********** WHILE(TRUE) e BREAK **********
while (true) {
    nomeProduto = prompt(
        "Digite o nome do produto: \n (Não digite nada para finalizar)"
    );
    if(nomeProduto !== "") {
        listaDeCompras.push(nomeProduto);
    } else {
        break;
    }
} 
console.log(listaDeCompras);  
*/

/* ********** EXEMPLO **********
const bandasPowerMetal = [
    "Helloween",
    "Blind Guardian",
    "Stratovarius",
    "DragonForce",
    "Rhapsody of Fire",
    "Symphony of Tears",
    "Sonata Arctica",
    "HammerFall",
    "Kamelot",
    "Nightwish",
    "Angra"
];

const buscaBanda = prompt("Digite uma banda para buscar:");
let indice = 0;
let isBandaExiste = false;

while(indice < bandasPowerMetal.length){
    const bandaAtual = bandasPowerMetal[indice];
    if(bandaAtual.toLowerCase() === buscaBanda.toLowerCase()){
        isBandaExiste = true;
        break;
    }
    indice++;
}

if(isBandaExiste) {
    alert("A banda foi encontrada!");
} else {
    alert("A banda não foi encontrada!");
}
*/


/* ********** EXEMPLO 02 - OBJETOS ********** */
const bandas = [
    { nome: "Helloween", genero: "Power Metal" },
    { nome: "Blind Guardian", genero: "Power Metal" },
    { nome: "Stratovarius", genero: "Power Metal" },
    { nome: "DragonForce", genero: "Power Metal" },
    { nome: "Rhapsody of Fire", genero: "Symphonic Metal" },
    { nome: "Nightwish", genero: "Symphonic Metal" },
    { nome: "Sonata Arctica", genero: "Power Metal" },
    { nome: "HammerFall", genero: "Power Metal" },
    { nome: "Kamelot", genero: "Symphonic Metal" },
    { nome: "Symphony of Tears", genero: "Power Metal" },
    { nome: "Angra", genero: "Progressive Metal" },
    { nome: "Blind Guardian", genero: "Power Metal" },
    { nome: "Epica", genero: "Symphonic Metal" },
    { nome: "Within Temptation", genero: "Symphonic Metal" },
    { nome: "Sabaton", genero: "Power Metal" },
    { nome: "Falconer", genero: "Folk Metal" },
    { nome: "Powerwolf", genero: "Power Metal" },
    { nome: "Dragonland", genero: "Power Metal" },
    { nome: "Lost Horizon", genero: "Power Metal" },
    { nome: "Iced Earth", genero: "Heavy Metal" },
    { nome: "Stormwarrior", genero: "Power Metal" },
    { nome: "Orphaned Land", genero: "Progressive Metal" },
    { nome: "Firewind", genero: "Power Metal" },
    { nome: "Rage", genero: "Power Metal" },
    { nome: "Therion", genero: "Symphonic Metal" },
    { nome: "Amon Amarth", genero: "Viking Metal" },
    { nome: "Ensiferum", genero: "Folk Metal" },
    { nome: "Xandria", genero: "Symphonic Metal" },
    { nome: "At Vance", genero: "Power Metal" },
    { nome: "Edguy", genero: "Power Metal" },
    { nome: "Sonata Arctica", genero: "Power Metal" },
    { nome: "Mago de Oz", genero: "Folk Metal" },
    { nome: "Kreator", genero: "Thrash Metal" },
    { nome: "Overkill", genero: "Thrash Metal" },
    { nome: "Arch Enemy", genero: "Melodic Death Metal" },
    { nome: "In Flames", genero: "Melodic Death Metal" },
    { nome: "Soilwork", genero: "Melodic Death Metal" },
    { nome: "Children of Bodom", genero: "Melodic Death Metal" },
    { nome: "Luca Turilli", genero: "Symphonic Metal" },
    { nome: "Haggard", genero: "Symphonic Metal" },
    { nome: "Delain", genero: "Symphonic Metal" },
    { nome: "Leaves' Eyes", genero: "Symphonic Metal" },
    { nome: "Rhapsody", genero: "Symphonic Metal" },
    { nome: "Galneryus", genero: "Power Metal" },
    { nome: "Hurricane", genero: "Heavy Metal" },
    { nome: "Running Wild", genero: "Heavy Metal" },
    { nome: "Tad Morose", genero: "Power Metal" },
    { nome: "Nocturnal Rites", genero: "Power Metal" },
    { nome: "Lordi", genero: "Hard Rock" },
    { nome: "Annihilator", genero: "Thrash Metal" },
    { nome: "Metallica", genero: "Thrash Metal" },
    { nome: "Megadeth", genero: "Thrash Metal" },
    { nome: "Pantera", genero: "Groove Metal" },
    { nome: "Slipknot", genero: "Nu Metal" },
];

const buscaGenero = prompt("Digite o gênero das bandas para buscar:");
let indice = 0;
let bandasSelecionadas = [];

while (indice < bandas.length){
    const bandaAtual = bandas[indice];

    if(bandaAtual.genero === buscaGenero){
        bandasSelecionadas.push(bandaAtual.nome);
    }
    indice++;
}

console.log(bandasSelecionadas);