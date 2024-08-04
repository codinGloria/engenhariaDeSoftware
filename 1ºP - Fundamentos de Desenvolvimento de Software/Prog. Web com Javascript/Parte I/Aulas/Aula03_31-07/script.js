// criando uma variável pra cada parte
let nome = prompt("Digite o seu nome:");
let sobrenome = prompt("Digite o seu sobrenome:");
let nomeCompleto = nome + " " + sobrenome;
let mensagem = "Seja bem-vindo, " + nomeCompleto + "!";

alert(mensagem);

// mais simplificado
alert(
	"Seja bem-vindo, " 
	+ prompt("Digite o seu nome:") + " "
	+	prompt("Digite o seu sobrenome: ") + "!"
);