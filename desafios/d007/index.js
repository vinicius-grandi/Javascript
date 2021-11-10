let res = document.querySelector('#res')
let price = Number(prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))

function converter() {
    let cash = Number(prompt('Quanto R$ você tem na carteira?'))
    let ccash = cash / price
    res.innerHTML = `<p>Seu saldo em dólar equivale a ${ccash}U$</p>`
}