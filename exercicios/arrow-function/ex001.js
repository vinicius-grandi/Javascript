let carrinho = [
    { nome: 'abacaxi', preco: '2.00' },
    { nome: 'detergente', preco: '2.50' },
    { nome: 'bolacha', preco: '3.80' }
]

carrinho.forEach(
    (produto) => {console.log(`Produto: ${produto.nome} | Preço: ${produto.preco}`)}
)