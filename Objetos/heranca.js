class Pessoa {
    constructor(nome, idade, sexo) 
    {
        this.nome = nome
        this.idade = idade 
        this.sexo = sexo
    }
    
    info() {
        console.log("Informação secreta")
    }
}

class Cliente extends Pessoa {
    // constructor()
    // {
    //     // super("jaiminho", 18, "masculino")
    //     // this.num = num
    //     // console.log(`Eu sou ${this.nome}, tenho ${this.idade}, do sexo ${this.sexo} e meu número de cliente é ${num}`)
    // }

    info() {
        super.info()
    }
}

let c1 = new Cliente()
c1.info()