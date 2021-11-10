function omegalol() {
    console.log(this)
}

const obj = {prop: "boa vida"}

let lul = omegalol.bind(obj)

lul()