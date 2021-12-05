const Pessoa = function (nome, idade) {
    this.nome = nome
    this.idade = idade
}

const Cliente = function (nome, idade, num) {
    const newPessoa = new Pessoa(nome, idade)
    newPessoa.numero = num
    Object.setPrototypeOf(this, newPessoa)
}

const clientelol = new Cliente('joão', '12', 10)

console.log(clientelol.numero)