let planetas = [
  "Mercúrio",
  "Vênus",
  "Terra",
  "Marte",
  "Júpiter",
  "Terra",
  "Urano",
  "Netuno",
  "Plutão",
  "Ceres",
];

const terraIndex = planetas.indexOf("Terra");
planetas.splice(0, terraIndex);

console.log(planetas);
