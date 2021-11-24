let i = setInterval(() => {
    console.log("10 segundos se passaram")
}, 10000)

setTimeout(()=>{
    console.log("O invervalo acabou")
    clearInterval(i)
}, 20100)