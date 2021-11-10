const obj = {
    prop: 'Eu fui chamado por um this dentro de num método',
    met: function() {
        return this.prop
    }
}

console.log(obj.met())