class Carro {
    cor
    constructor(cor, marca) {
        this.cor = cor
        this.marca = marca
    }
    
}

let carrin = new Carro('vermelha', 'sedan')
carrin.setCor('azul')
carrin.getCor()