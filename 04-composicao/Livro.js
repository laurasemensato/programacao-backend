class Livro {
  #preco;
  #estoque;

  constructor(titulo, autor, preco, estoque, categoria) {
    this.titulo = titulo;
    this.autor = autor;
    this.#preco = preco;
    this.#estoque = estoque;
    this.categoria = categoria;
  }
  descrever() {
    console.log("Titulo: " + this.titulo);
    console.log("Autor: " + this.autor);
    console.log("Preço: R$ " + this.#preco);
    console.log("Estoque: " + this.#estoque);
    console.log("Categoria: " + this.categoria.nome);
  }
  valorEmEstoque() {
    return this.#preco * this.#estoque;
  }
  get preco() {
    return this.#preco;
  }
  get estoque() {
    return this.#estoque;
  }
  set preco(novoPreco) {
    if (novoPreco < 0) {
      console.log("ERRO. O preço não pode ser negativo");
      return;
    }
    this.#preco = novoPreco;
  }
}

module.exports = Livro;
