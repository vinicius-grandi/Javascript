const lib = require('../Jest/index-async');

test('async callback', (done) => {
  function callback(param) {
    expect(param).toBe(9);
    done();
  }

  lib.callAfter2sec(9, callback)
});

test('promise suel', () => {
  return lib.getSuel().then((response) => {
    expect(response.data.name).toBe('Suel');
  });
});

test('promise with async/await suel', async () => {
  const response = await lib.getSuel();
  expect(response.data.name).toBe('Ssuel');
});
