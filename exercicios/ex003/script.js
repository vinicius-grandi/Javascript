function count() {
    var st = document.querySelector("#st")
    var end = document.querySelector('#end')
    var pace = document.querySelector('#pace')
    var res = document.querySelector('#res')
    
    if (st.value.length == 0 || end.value.length == 0 || pace.value.length <= 0) {
        res.innerHTML = 'Impossível de contar'
    } else {
        res.innerHTML = 'Contando: '
        var s = Number(st.value)
        var e = Number(end.value)
        var p = Number(pace.value)
        if (s < e) {
            //contagem crescente
        for(var c = s; c <= e; c += p) {
            res.innerHTML += `${c} &#x1F449;`
        }
        } else {
            //contagem regressiva
            for(var c = s; c >= e; c -= p) {
                res.innerHTML += `${c} &#x1F449;`
        }
    }
}}