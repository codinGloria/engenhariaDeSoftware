const darkModeToggle = document.getElementById("darkModeToggle");

document.body.classList.add("light=mode");

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "Light Mode";
  } else {
    darkModeToggle.textContent = "Dark Mode";
  }
});

/* QUESTÃO 04 */
const navElement = document.querySelector("nav");

const destaqueImg = document.createElement("img");

destaqueImg.src = "./assets/all.jpg";
destaqueImg.alt = "Imagem de destaque personagens Arcane";
destaqueImg.title = "Destaque Arcane";
destaqueImg.style.width = "100%";
destaqueImg.style.display = "block";

navElement.insertAdjacentElement("afterend", destaqueImg);

/* QUESTÃO 05 */
const footer = document.querySelector("footer");

const footerList = document.createElement("ul");

const navItems = ["Início", "Personagens", "Episódios", "Contato"];

navItems.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  footerList.appendChild(li);
});

footerList.style.listStyle = "none";
footerList.style.display = "flex";
footerList.style.justifyContent = "center";
footerList.style.padding = "10px";
footerList.style.gap = "10px";

footer.appendChild(footerList);

/* QUESTÃO 06 */
const nome = prompt("Qual é o seu nome?");

const visitante = {
  nome: nome || "Visitante",
};

const mainSection = document.querySelector("main section");

const mensagem = document.createElement("p");
mensagem.textContent = `Bem-vindo(a), ${visitante.nome}! Aproveite nosso site! :]`;

mensagem.classList.add("mensagem");

mainSection.insertBefore(mensagem, mainSection.firstChild);

/* QUESTÃO 07 */
const table = document.createElement("table");

const tableContent = `
  <tr>
    <th>Personagem</th>
    <th>Habilidade</th>
    <th>Origem</th>
    <th>Status</th>
  </tr>
  <tr>
    <td>Jinx</td>
    <td>Explosivos</td>
    <td>Zaun</td>
    <td>F</td>
  </tr>
  <tr>
    <td>Vi</td>
    <td>Combate corpo a corpo</td>
    <td>Zaun</td>
    <td>Viva</td>
  </tr>
  <tr>
    <td>Silco</td>
    <td>Manipulação</td>
    <td>Zaun</td>
    <td>F</td>
  </tr>
  <tr>
    <td>Jayce</td>
    <td>Hextech</td>
    <td>Piltover</td>
    <td>Vivo</td>
  </tr>
`;

table.innerHTML = tableContent;

table.style.width = "100%";
table.style.borderCollapse = "collapse";
table.style.marginTop = "20px";

table.querySelectorAll("th, td").forEach((cell) => {
  cell.style.border = "1px solid #ddd";
  cell.style.padding = "8px";
  cell.style.textAlign = "center";
  cell.style.fontSize = "16px";
  cell.style.color = "#34495e";
});

table.querySelectorAll("th").forEach((header) => {
  header.style.backgroundColor = "#24344e";
  header.style.color = "#fff";
  header.style.fontWeight = "bold";
});

mainSection.appendChild(table);
