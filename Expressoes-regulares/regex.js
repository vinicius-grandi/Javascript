const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z])?$/gi;
const msg = "jojoj@ojogmail.d";

if (msg.search(regex)) {
  console.log('Email Inválido');
}
