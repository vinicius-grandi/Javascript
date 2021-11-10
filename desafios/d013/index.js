let res = document.querySelector('#res')

function verify() {
    let name = prompt('Qual o nome do aluno?')
    let fgrade = Number(prompt(`Primeira nota de ${name}:`))
    let sgrade = Number(prompt(`Segunda nota de ${name}:`))
    let agrade = (fgrade + sgrade) / 2

    if (agrade < 3) {
        res.innerHTML = `
        <p>
            Com as notas ${fgrade} e ${sgrade}, a média é ${agrade}
        </p>
        <p>
            Com média abaixo de 3,0, o aluno está <mark id='disapp'>REPROVADO</mark>
        </p>
        `
    } else {
        if (agrade <= 6 && agrade >= 3) {
            res.innerHTML = `
        <p>
            Com as notas ${fgrade} e ${sgrade}, a média é ${agrade}
        </p>
        <p>
            Com média entre 3,0 e 6,0, o aluno está <mark id='rec'>RECUPERAÇÃO</mark>
        </p>
        `
        }
        if (agrade > 6) {
            res.innerHTML = `
        <p>
            Com as notas ${fgrade} e ${sgrade}, a média é ${agrade}
        </p>
        <p>
            Com média maior que 6,0, o aluno está <mark id='app'>APROVADO</mark>
        </p>
        `
        }
    }
}