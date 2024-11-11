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
 
    public calcularTotal() {
        
    }
}