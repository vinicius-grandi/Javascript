const _usuario = {
  nome: 'Ayrton',
  email: 'joao@gmail.com'
}

const usuario = new Proxy(_usuario, {
  get: (target, propKey) => target[propKey].toUpperCase(),
  set: (target, propKey, value) => target[propKey] = value,
  has: (target, propKey) => 
    (propKey === 'nome') ? 0 : propKey in target
});

console.log('nome' in usuario)
