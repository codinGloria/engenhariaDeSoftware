document.querySelector("button").addEventListener("click", () => {
  const paragrafo = document.createElement("p");
  paragrafo.innerHTML =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid sequi error repudiandae sunt quasi blanditiis incidunt voluptatibus commodi porro velit eaque, eum nihil pariatur ea modi! ";
  paragrafo.style.backgroundColor = "yellow";
  paragrafo.style.color = "blue";
  document.body.appendChild(paragrafo);
});
