const produtosDiv = document.getElementById("produtos");

async function buscarProdutos() {
  const response = await fetch("https://fakestoreapi.com/products");
  const produtos = await response.json();

  produtos.forEach((produto) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <h2>${produto.title}</h2>
            <img src="${produto.image}" alt="${produto.title}" style="width:100%">
            <p>Preço: $${produto.price}</p>
            <p>${produto.description}</p>
        `;
    produtosDiv.appendChild(card);
  });
}

buscarProdutos();
