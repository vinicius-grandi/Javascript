function ttab() {
var num = document.getElementById("num")
var tab = document.getElementById('table')

if (num.value.length == 0) {
    alert('Adicione um número no espaço em branco.')
    } else {
        let n = Number(num.value)
        var m = 1
        tab.innerHTML = ''
        for (n ; m <= 10; ++m) {
            let item = document.createElement('option')
            item.text = `${n} x ${m} = ${n*m}`
            tab.appendChild(item)
        }
    }
}