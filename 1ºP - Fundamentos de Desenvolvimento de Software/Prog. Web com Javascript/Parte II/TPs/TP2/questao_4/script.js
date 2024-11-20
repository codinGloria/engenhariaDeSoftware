const produtosGamers = [
  ["Mouse Gamer", 199.99],
  ["Teclado Mecânico", 349.9],
  ["Headset Gamer", 279.0],
  ["Monitor 144Hz", 1199.0],
  ["Placa de Vídeo RTX 3060", 2499.0],
  ["Processador Intel i7", 1499.0],
  ["SSD 1TB", 499.0],
  ["Mesa Gamer", 899.0],
  ["Cadeira Gamer", 1299.0],
  ["Joystick PS5", 499.0],
  ["Console Xbox Series X", 4499.0],
  ["Console PS5", 4999.0],
  ["Gamepad PC", 129.99],
  ["Fone de Ouvido Sem Fio", 199.0],
  ["Capturadora de Vídeo", 599.0],
  ["Mousepad Gigante", 89.9],
  ["Suporte para Headset", 49.9],
  ["Webcam 1080p", 199.99],
  ["Caixa de Som Bluetooth", 299.0],
  ["Kit de Iluminação LED", 149.9],
  ["Jogo AAA (ex: Elden Ring)", 249.0],
];

const maisBaratos = produtosGamers.sort((a, b) => a[1] - b[1]).slice(0, 3);

console.log(maisBaratos);
