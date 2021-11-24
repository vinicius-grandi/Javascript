let n = 34

try {
    if(n > 10){
        throw new Error("Valor inválido ")
    }
    console.log(`Seu valor é válido, ${n}`)
} catch(e) {
    console.log(e.message + n +" é um valor muito alto. Só aceitamos menores que 10.")
}