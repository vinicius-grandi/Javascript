let res = document.getElementById('res')

function verify () {
    let pyear = Number(prompt('Qual é o ano que você quer verificar'))
    if (pyear % 4 == 0) {
        res.innerHTML = `<h2>Analisando o ano de ${pyear}</h2>
        <p>O ano de ${pyear} <mark id='right'><strong>É BISSEXTO</strong></mark></p>
        `
    } else {
        res.innerHTML = `<h2>Analisando o ano de ${pyear}</h2>
        <p>O ano de ${pyear} <mark id='wrong'><strong>NÃO É BISSEXTO</strong></mark></p>`
    }
}