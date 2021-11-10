let pessoa = {nome:'João', sexo:'Masculino', 
peso:9,
engordar(p = 0){
    this.peso += p
}
}
pessoa.engordar(1)
console.log(pessoa.peso)