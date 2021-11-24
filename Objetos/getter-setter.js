class Carro {
    constructor(cor, marca) {
        this.cor = cor
        this.marca = marca
    }

    set setCor( c) {
        this.cor = c
    }

    get getCor() {
        return this.cor
    }
}

let carrin = new Carro('vermelha', 'sedan')
carrin.setCor = "azul"
console.log(carrin.getCor)