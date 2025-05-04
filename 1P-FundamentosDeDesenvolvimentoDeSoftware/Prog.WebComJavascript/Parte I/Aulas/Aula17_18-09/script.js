/* Recaptulando sobre funções */

// recebendo um parametro
function alertConsoleLog(texto) {
    alert(texto);
    console.log(texto);
}
alertConsoleLog("Isso é um teste");

// recebendo 3 parâmetros
function somaTresNumeros(a, b, c) {
    const resultado = a + b + c;
    alert(resultado);
}
somaTresNumeros(1, 2, 3);

// retornando algo
function somaTresNumeros2(a, b, c) {
    const resultado = a + b + c;
    return resultado;
}
const res = somaTresNumeros2(1, 2, 3);
alert(res);

// com operadores lógicos
function juntaNomeSobrenome(nome, sobrenome) {
    if(nome.length > 0 && sobrenome.length >0) {
        const nomeCompleto = nome + " " + sobrenome;
        return nomeCompleto;
    } else {
        return "Nome Inválido :/"
    }
}
const meuNome = juntaNomeSobrenome("Lívia", "Braz");
alert("Meu nome é: " + meuNome);

// Funções math (min, max, pow, sign, random...)
Math.min(1,5,98,65,1,2,5,48974); // o menor número
Math.max(1,5,98,65,1,2,5,48974); // o maior número

// Funções location (pathname, host, protocol, href, reload, replace)

// Funções navigator (bluetooth, clipboard, deviceMemory, gpu, language, languages)
navigator.userAgent() // informações de navegador, sistema operacional