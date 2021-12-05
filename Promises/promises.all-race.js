const promise1 = new Promise((res, rej) => {
    res("Primeira Promise Resolvida")
})

const promise2 = new Promise((res, rej) => {
    res("Segunda Promise Resolvida")
})

const promise3 = new Promise((res, rej) => {
    res("Terceira Promise Resolvida")
})

Promise.all([promise1, promise2, promise3])
    .then(msg => console.log(msg))

Promise.race([promise1, promise2, promise3])
    .then(msg => console.log(msg))