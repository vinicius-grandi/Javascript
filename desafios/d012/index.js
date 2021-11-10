let res = document.querySelector('#res')

function verify() {
    let pvprice = Number(prompt('Qual era o preço anterior do produto?'))
    let cprice = Number(prompt('Qual  o preço atual do produto?'))
    let pricevd = pvprice - cprice
    let vd = (pricevd * 100) / pvprice
    let pricevu = cprice - pvprice

    if (pvprice > cprice) {
        res.innerHTML = `
        <p>
            O produto custava ${pvprice.toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})} e agora custa ${cprice.toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})}.</p>
        <p>
            Hoje o produto está mais barato.
        </p>
        <p>
            O preço caiu ${pricevd.toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.
        </p>
        <p>
            Uma variação de ${vd.toFixed(2).replace('.', ',')}% para baixo.
        </p>
        `
    } else {
        res.innerHTML = `
        <p>
            O produto custava ${pvprice.toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})} e agora custa ${cprice.toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})}.</p>
        <p>
            Hoje o produto está mais caro.
        </p>
        <p>
            O preço subiu ${pricevu.toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.
        </p>
        <p>
            Uma variação de ${-vd.toFixed(2)}% para baixo.
        </p>
        `
    }
}