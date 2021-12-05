// let [a, b] = [2, 4];

// [a, b] = [b, a]

// console.log(a)

const obj = {
    a: "ola",
    b: "lol"
}

// let {a, b} = obj;
// console.log(a, b)
// const Pessoa = {n: "joão", i: 66}
// const {n: nome, i: idade} = Pessoa

// console.log(nome)
// console.log(idade)

// const metadata = {
//     title: "Scratchpad",
//     translations: [
//         {
//             locale: "br",
//             language: "portuguese",
//             title: "Tela de Rascunho"
//         }
//     ],
//     url: "url-template"
// }

// const {title: metaTitle, translations:[{title: localeTitle}]} = metadata

// console.log(metaTitle, "\r" + localeTitle)

// const user = {
//     n: "Joãozin",
//     i: 14
// }

// function digaNome ({n: nome, i: idade}) {
//     console.log(`Meu nome é ${nome} e tenho ${idade} de idade`)
// }

// digaNome(user)

const key = "z"
const {[key]:foo} = {z: "bar"};

console.log(foo)