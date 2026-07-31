console.log("Olá! Aqui é o back-end da Livraria.");
const nomeDaLivraria = "Livraria SENAI";
const livro = {
  titulo: "Clean Code",
  autor: "Robert C. Martin",
  preco: 119.9,
  estoque: 12,
};
console.log(`=== ${nomeDaLivraria} ===`);
console.log(`Livro: ${livro.titulo}`);
console.log(`Autor: ${livro.autor}`);
console.log(`Preço: R$ ${livro.preco.toFixed(2)}`);
console.log(`Em estoque: ${livro.estoque} unidades`);

const catalogo = require("./catalogo");
console.log("=== CATÁLOGO DA LIVRARIA ===");
console.log("");
console.log("Titulo: " + catalogo.livro1.titulo);
console.log("Autor: " + catalogo.livro1.autor);
console.log("Preco: R$ " + catalogo.livro1.preco);
console.log("");
console.log("Titulo: " + catalogo.livro2.titulo);
console.log("Autor: " + catalogo.livro2.autor);
console.log("Preco: R$ " + catalogo.livro2.preco);