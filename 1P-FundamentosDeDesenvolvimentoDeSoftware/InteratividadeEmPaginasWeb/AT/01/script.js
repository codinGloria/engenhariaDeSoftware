const carro = {
  marca: "Chevrolet",
  modelo: "Omega",
  ano: 1994,
  mostrarDetalhes() {
    console.log(
      `Marca: ${this.marca},\nModelo: ${this.modelo}, \nAno: ${this.ano}`
    );
  },
  ligar() {
    console.log("O carro está ligado!");
  },
};

carro.mostrarDetalhes();
carro.ligar();
