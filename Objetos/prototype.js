class Prototipada {

}

Prototipada.prototype.nome = "João"
Prototipada.prototype.info = () => console.log("Meu deus")

let p1 = new Prototipada
console.log(p1.nome)
p1.info()