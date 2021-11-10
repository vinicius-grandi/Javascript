let add = document.querySelector('#add')
let num = document.getElementById('num')
let fin = document.querySelector('#fin')
let res = document.querySelector('#resul')
let sel = document.querySelector('#addnum')
let values = []
add.addEventListener("click", anal)
fin.addEventListener('click', fini)

function anal() {
    if (isNum(num.value) && isInList(num.value, values)) {
        values.push(num.value)
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        sel.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function isNum(n) {
    if (Number(n) <= 100 && Number(n) >= 1) {
        return true 
    } else {
        return false
    }
}

function isInList(n, l) {
    if (l.indexOf(n) < 0) {
        return true
    } else {
        return false
    }
}

function fini() { 

    var nn = values.map(function(elem) {
        return Number(elem)
    })
    if (nn.length >= 1) {
        
    let higher = nn[0]
    let lower = nn[0]
    let s = 0

    for (let pos in nn) {
        s += nn[pos]
        if (nn[pos] > higher) 
            higher = nn[pos]  
        if (nn[pos] < lower) 
            lower = nn[pos]    
    }
    res.innerHTML = `Ao todo, temos ${nn.length} elementos.<br>
    O maior valor informado foi ${higher} <br>
    O menor valor ${lower} <br>
    A soma de todos os valores é igual a ${s} <br>
    A média dos valores digitados é ${s / nn.length}
    `
    } else {
        alert('Insira pelo menos um valor.')
    }
}
