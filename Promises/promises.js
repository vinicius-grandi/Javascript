function p() {
    let i = 0
    let p = new Promise((res, rej) => {
        setTimeout(()=> {
            if(i < 3) {
                res("Sucesso")
            } else {
                rej("Falha")
            }
        }, 10000)
    })
    return p
}

p()
    .then((s)=>console.log(s))
    .catch((f)=>console.log(f))