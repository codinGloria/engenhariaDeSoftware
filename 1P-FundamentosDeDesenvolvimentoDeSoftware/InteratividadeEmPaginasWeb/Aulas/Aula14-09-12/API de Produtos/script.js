async function fetchFakeStore(){
    try {
        const response = await fetch("https://fakestoreapi.com/products/");

        if (!response.ok) {
            throw new Error("Status do erro: " + response.status);
        }

        const data = await response.json();
        console.log(data);
        exibeProd(data);
    }
    catch(e){
        console.log(e.message);
    }
}

function exibeProd(produtos){
    let container = document.querySelector("main");
    produtos.forEach(produto => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h2 class="titulo">${produto.title}</h2>
            <img src="${produto.image}" alt="" class="img">
            <p class="descricao">${produto.description}</p>
            <div class="preco">USD $${produto.price}</div>
        `
        container.appendChild(card);
    });
}

fetchFakeStore();