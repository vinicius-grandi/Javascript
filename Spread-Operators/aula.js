// numbers = [1, 4, 6]

// function sum(n1, n2, n3) {
//     return n1 + n2 + n3
// }

// console.log(sum(...numbers))

array1 = [2, 3]
array2 = [4, 5]
arrayConcatenado = [...array1, ...array2]

console.log(arrayConcatenado)

obj1 = {prop1: 2, prop2: 3}
obj2 = {prop3: 4, prop4: 5}
objCopy = {...obj1, ...obj2}

console.log(objCopy)