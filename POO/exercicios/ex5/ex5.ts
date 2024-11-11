class produto {
    nome: string;
    preco: number;

    constructor (n: string, p: number) {
        this.nome = n;
        this.preco = p;
    }
}
class carrinhoDeCompras {
    produtos: produto[];

    constructor (prod: produto[]) {
        this.produtos = prod;
    }

    public adicionarProduto(product: produto): void {
        this.produtos.push(product);
    }
 
    public calcularTotal(): number {
        let preco_total: number = 0;
        this.produtos.forEach((product: produto) => {
            preco_total += product.preco;
        })
        return preco_total;
    }
}

// Criando alguns objetos do tipo produto
const produto1 = new produto("Camiseta", 50);
const produto2 = new produto("Calça Jeans", 120);
const produto3 = new produto("Tênis", 200);

// Criando uma lista de produtos
const listaDeProdutos: produto[] = [produto1, produto2, produto3];

// Criando o carrinho de compras com a lista de produtos
const meuCarrinho = new carrinhoDeCompras(listaDeProdutos);

// Exibindo o total da compra
console.log("Total do carrinho: R$", meuCarrinho.calcularTotal());