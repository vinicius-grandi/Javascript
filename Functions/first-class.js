// function arg () {
//     return function lul () {
//         console.log(1 + 1)
//     }   
// }

// let myfunc = arg()

// myfunc()
function arg () {
    return function lul () {
        return function lul () {
        return console.log('funcionou')
        } 
    } 
}

arg()()()