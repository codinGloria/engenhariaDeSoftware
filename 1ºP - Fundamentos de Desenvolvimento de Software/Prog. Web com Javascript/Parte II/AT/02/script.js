let planetas = [
  "Mercúrio",
  "Vênus",
  "Terra",
  "Marte",
  "Júpiter",
  "Saturno",
  "Urano",
  "Netuno",
  "Plutão",
  "Ceres",
];

planetas.splice(planetas.indexOf("Terra"), 1);
planetas.splice(planetas.indexOf("Urano"), 1, "Terra");

const marteIndex = planetas.indexOf("Marte");
const jupiterIndex = planetas.indexOf("Júpiter");

const marte = planetas.splice(marteIndex, 1)[0];
const jupiter = planetas.splice(
  jupiterIndex > marteIndex ? jupiterIndex - 1 : jupiterIndex,
  1
)[0];

planetas.splice(marteIndex, 0, jupiter);
planetas.splice(jupiterIndex, 0, marte);

console.log(planetas);
