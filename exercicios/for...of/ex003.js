let Casa = {
    metrosQuadrados: 4000,
    altura: 3000,
    nQuartos: 4,
    nBanheiros: 2
}

for(let atributo in Casa) {
    console.log(`${atributo}: ${Casa[atributo]}`)
    console.log(typeof atributo)
}
