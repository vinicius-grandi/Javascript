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

    static luz() {
        console.log("LUZ LIGADA")
    }
}

Carro.luz()