function multiplicapeloPrimeiro(multiplicador, ...args) {
    return args.reduce((a, cv) => multiplicador * (a + cv))
}

console.log(multiplicapeloPrimeiro(1, 3, 4, 6, 6))