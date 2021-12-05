// const sum = (n1, n2, n3) => {
//     return n1 + n2 + n3
// }

// console.log(sum(1, 2, 3))

function infiniteSum() {
    const args = Array.from(arguments)

    return args.reduce((a, cv) => a + cv)
}

console.log(infiniteSum(5, 5, -2, 4, 3, -1))