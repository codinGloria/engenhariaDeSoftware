/* Datas no JS */

const data = new Date(); // cria a data com base no horario atual, ex: Sun Oct 13 2024 17:48:59 GMT-0300 (Hora padrão de Brasília) 

data.getMonth(); //retorna o número do mes
data.getFullYear(); //retorna o ano

//Passando uma data específica

/* OBS:
O JS conta sempre os números do mes com mês -1, ex: 
    janeiro = 0, 
    fevereiro = 1)
*/
const dataNasc = new Date(2002, 1, 28, 23, 10, 28);
//normalmente na seguinte ordem: ano -> mes -> dia -> hora -> minutos -> segundos

const mesNasc = dataNasc.getMonth();
const anoNasc = dataNasc.getFullYear();
const diaNasc = dataNasc.getDate();
const diaSemana = dataNasc.getDay();
const hora = dataNasc.getHours();
const minuto = dataNasc.getMinutes();
const segundo = dataNasc.getSeconds();
const mili = dataNasc.getMilliseconds();

/* dataNasc.setFullYear(2025);
dataNasc.setMonth(6); */

const dataNascFormatada = dataNasc.toLocaleDateString("en-US"); //ou deixar em branco traz pro pt-BR

const antes = new Date(2022, 9, 18);
const agora = new Date();

const diasPassados = Math.round(
    (agora.getTime() - antes.getTime()) / 1000 / 60 / 60 / 24
);

alert(diasPassados);