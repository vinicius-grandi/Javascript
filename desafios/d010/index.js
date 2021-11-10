let res = document.querySelector('#res')

function calculate() {
    let a = Number(prompt('Qual o valor de a°'))
    let b = Number(prompt('Qual o valor de b?'))
    let c = Number(prompt('Qual o valor de c?'))
    let delta = (b ** 2) - (4 * a * c)

    res.innerHTML = `<p>A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong></p>
    <p>O cáculo realizado será <strong>&Delta; =  ${b}² - 4 . ${a} . ${c}</strong></p>
    O valor calculado foi <strong>&Delta; = ${delta}</strong>
    `
}