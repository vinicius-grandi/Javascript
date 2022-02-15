const ID = Symbol('salve');
const ID2 = Symbol('salve');

console.log(ID === ID2);

const obj = {
  [ID]: () => {
    return 'salve';
  },
  get getID() {
    return this[ID]();
  },
}

console.log(obj);
