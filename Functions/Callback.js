const chama = (x, y) => console.log('Fui invocado ' + (x + y))

const chamador = (nome, x, y) => nome(x, y)

chamador(chama, 2, 4)