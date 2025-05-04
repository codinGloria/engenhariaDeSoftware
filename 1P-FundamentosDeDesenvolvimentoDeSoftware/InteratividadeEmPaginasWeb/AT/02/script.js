function Carro(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
}

const carro1 = new Carro("Chevrolet", "Omega", 1994);
const carro2 = new Carro("Chevrolet", "Opala", 1974);
const carro3 = new Carro("Fiat", "147", 1979);

console.log(carro1);
console.log(carro2);
console.log(carro3);
