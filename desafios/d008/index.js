let res = document.querySelector('#res')

function promo() {
    let prod = prompt('Qual é o produto que você está comprando?')
    let pprice = Number(prompt(`Qual é o preço de ${prod}?`))
    let pro = pprice * 0.1
    pro = pro.toFixed(2).replace('.', ',')

    res.innerHTML = `<p>Clique no botão acima para iniciar</p>
    <p>O preço original era 
    ${pprice.toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})}
    
    .</p>
    <p>Você acaba de ganhar R$
    
    ${pro}
    
    (-10%).</p>
    <p>No fim, você vai pagar
    
    ${(pprice - pro).toLocaleString('pt-br' , {style: 'currency', currency: 'BRL'})}
    
    no produto ${prod}</p>`
}
