res = document.querySelector('#res')

function readjustment() {
    let name = prompt('Qual é o nome do funcionário')
    let sal = Number(prompt(`Qual é o salário de ${name}`))
    let read = Number(prompt(`O salário de ${name} vai ser reajustado em qual porcentagem?`)) / 100
    let salI = sal * read
    let Csal = (sal + salI).toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})
    
    res.innerHTML = `<p>O salário atual era ${sal.toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})}</p>
    <p>Com um aumento de ${read * 100}%, o salário vai aumentar ${salI.toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})} no próximo mês.</p>
    <p>E a partir daí, Pedro Paulo vai passar a ganhar ${Csal}</p>`
}