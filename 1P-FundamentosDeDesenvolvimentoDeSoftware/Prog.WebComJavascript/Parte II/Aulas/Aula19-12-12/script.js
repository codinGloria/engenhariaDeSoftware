/* SET TIMEOUT 
console.log("Antes");

function mostraDepois(){
    console.log("Depois");
}

setTimeout(mostraDepois, 4000);
*/

/* SET INTERVAL 
let contador = 1;

function mostraNumero(){
    console.log(contador);
    contador++;
}

setInterval(mostraNumero, 1000);
*/

/* PROMISE 
const prometa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() < 0.5){
            resolve("Redpill");
        } else {
            reject("Bluepill");
        }
    }, 3000);
});

prometa.then(pill => {
    console.log(pill);
}).catch(pill => {
    console.log(pill);
});*/

/* Exemplo de Promise em Cara ou Coroa */
class MoedaError extends Error{}

function flipTheCoin(){
    console.log("Joga a moeda!");

    const tempoPraPegarMoeda = Math.random() * 3 + 3;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            if(rand < 1 / 3){
                resolve("Cara");
            } else if (rand < 2 / 3){
               resolve("Coroa");
            } else {
                reject(new MoedaError("Não consegui jogar a moeda"));
            }
        }, tempoPraPegarMoeda * 1000);
    });
}

/* Exemplo com Then
flipTheCoin()
    .then(caraOuCoroa => {
        console.log(caraOuCoroa);
        return flipTheCoin();
    })
    .then(caraOuCoroa => {
        console.log(caraOuCoroa);
        return flipTheCoin();
    })
    .then(caraOuCoroa => {
        console.log(caraOuCoroa);
    })
    .catch(error => {
    console.log(error);
    });
*/

// ASYNC AWAIT
async function jogaTresMoedas(){
    const caraOuCoroa1 = await flipTheCoin();
    console.log(caraOuCoroa1);
    const caraOuCoroa2 = await flipTheCoin();
    console.log(caraOuCoroa2);
    const caraOuCoroa3 = await flipTheCoin();
    console.log(caraOuCoroa3);
}

jogaTresMoedas();    